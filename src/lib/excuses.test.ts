import { describe, expect, it } from 'vitest'
import { getCategories, getRandomExcuse } from './excuses'

describe('getRandomExcuse', () => {
  it('returns an excuse for the requested locale', async () => {
    const excuse = await getRandomExcuse('en')

    expect(excuse).toMatchObject({
      id: expect.any(String),
      text: expect.any(String),
      category: expect.any(String),
      language: 'en',
    })
  })

  it('returns a German excuse for the de locale', async () => {
    const excuse = await getRandomExcuse('de')

    expect(excuse.language).toBe('de')
    expect(excuse.text.length).toBeGreaterThan(0)
  })

  it('falls back to the base locale for an unknown locale', async () => {
    const excuse = await getRandomExcuse('xx')

    expect(excuse.language).toBe('en')
    expect(excuse.id).toBeDefined()
  })

  it('filters by category', async () => {
    const excuse = await getRandomExcuse('en', 'work')

    expect(excuse.category).toBe('work')
  })
})

describe('getCategories', () => {
  it('returns unique categories from the base locale', async () => {
    const categories = await getCategories()

    expect(categories).toContain('absurd')
    expect(categories).toContain('polite')
    expect(categories).toContain('work')
    expect(new Set(categories).size).toBe(categories.length)
  })
})
