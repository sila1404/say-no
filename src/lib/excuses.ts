import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export interface Excuse {
  id: string
  text: string
  category: string
}

export interface LocalizedExcuse extends Excuse {
  language: string
}

const EXCUSES_DIR = resolve(process.cwd(), 'src/data/excuses')
const BASE_LOCALE = 'en'

async function loadExcuses(locale: string): Promise<Excuse[]> {
  const filePath = resolve(EXCUSES_DIR, `${locale}.json`)
  const raw = await readFile(filePath, 'utf-8')
  return JSON.parse(raw) as Excuse[]
}

export async function getCategories(): Promise<string[]> {
  const excuses = await loadExcuses(BASE_LOCALE)
  return [...new Set(excuses.map((e) => e.category))].sort()
}

export async function getRandomExcuse(
  locale: string,
  category?: string,
): Promise<LocalizedExcuse> {
  let excuses: Excuse[]

  try {
    excuses = await loadExcuses(locale)
  } catch {
    if (locale === BASE_LOCALE) {
      throw new Error(`No excuses found for base locale ${BASE_LOCALE}`)
    }
    excuses = await loadExcuses(BASE_LOCALE)
    locale = BASE_LOCALE
  }

  if (category) {
    excuses = excuses.filter((e) => e.category === category)
  }

  if (excuses.length === 0) {
    throw new Error(`No excuses available for locale ${locale}${category ? ` / category ${category}` : ''}`)
  }

  const excuse = excuses[Math.floor(Math.random() * excuses.length)]
  return { ...excuse, language: locale }
}
