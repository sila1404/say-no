import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

import { getExcuse } from '#/functions/get-excuse'
import { getCategoriesFn } from '#/functions/get-categories'
import { getLocale, locales } from '#/paraglide/runtime'
import { m } from '#/paraglide/messages'
import LocaleSwitcher from '#/components/LocaleSwitcher'
import ThemeToggle from '#/components/ThemeToggle'

export const Route = createFileRoute('/')({ component: Home })

const hairline = '1px solid var(--hairline)'

function Home() {
  const locale = getLocale()
  const [category, setCategory] = useState<string | undefined>(undefined)
  const [copied, setCopied] = useState(false)

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategoriesFn(),
    staleTime: Infinity,
  })

  const {
    data,
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ['excuse', locale, category],
    queryFn: () =>
      getExcuse({ data: { locale, category } }),
  })

  const handleCopy = async () => {
    if (!data) return
    await navigator.clipboard.writeText(data.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      className="min-h-screen px-4 py-4"
      style={{ backgroundColor: 'var(--canvas)', color: 'var(--ink)' }}
    >
      <div className="mx-auto max-w-240">
        <header
          className="flex items-center justify-between gap-4 pb-4"
          style={{ borderBottom: hairline }}
        >
          <div className="text-base font-bold tracking-tight">[say-no]</div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </header>

        <main className="py-8">
          <section className="mb-10">
            <h1
              className="mb-4 text-[38px] font-bold leading-normal tracking-tight"
              style={{ color: 'var(--ink)' }}
            >
              {m.app_subtitle()}
            </h1>
            <p
              className="text-base leading-normal"
              style={{ color: 'var(--body)' }}
            >
              {m.app_title()} / v1.0 / {locales.length} locales
            </p>
          </section>

          <section className="mb-10">
            <div
              className="mb-4 text-base font-bold leading-normal"
              style={{ color: 'var(--ink)' }}
            >
              [~] {m.filter_label()}
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterButton
                label={`${m.filter_all()}`}
                selected={category === undefined}
                onClick={() => setCategory(undefined)}
              />
              {categories?.map((cat) => (
                <FilterButton
                  key={cat}
                  label={cat}
                  selected={category === cat}
                  onClick={() => setCategory(cat)}
                />
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div
              className="mb-4 text-base font-bold leading-normal"
              style={{ color: 'var(--ink)' }}
            >
              [=] output
            </div>
            <div
              className="min-h-60 p-8"
              style={{
                backgroundColor: 'var(--surface-dark)',
                color: 'var(--on-dark)',
              }}
            >
              {isPending && (
                <div
                  className="flex h-full min-h-44 items-center gap-3 text-base"
                  style={{ color: 'var(--ash)' }}
                >
                  <span>[*]</span>
                  <span>{m.loading_text()}</span>
                </div>
              )}

              {error && !isPending && (
                <div className="space-y-4">
                  <p className="text-base" style={{ color: '#ff3b30' }}>
                    [x] {m.error_text()}
                  </p>
                  <button
                    onClick={() => refetch()}
                    className="text-base font-medium"
                    style={{
                      backgroundColor: 'var(--on-dark)',
                      color: 'var(--surface-dark)',
                      padding: '4px 20px',
                      borderRadius: '4px',
                    }}
                  >
                    {m.retry_button()}
                  </button>
                </div>
              )}

              {data && !isPending && (
                <div className="space-y-6">
                  <div
                    className="mb-6 inline-block text-sm"
                    style={{
                      backgroundColor: 'var(--surface-dark-elevated)',
                      color: 'var(--ash)',
                      padding: '8px 12px',
                      borderRadius: '4px',
                    }}
                  >
                    $ generate --locale={data.language}
                    {data.category ? ` --category=${data.category}` : ''}
                  </div>
                  <blockquote className="text-2xl font-medium leading-normal">
                    {data.text}
                  </blockquote>
                  <div
                    className="flex items-center gap-4 text-sm"
                    style={{ color: 'var(--ash)' }}
                  >
                    <span
                      className="font-medium"
                      style={{
                        backgroundColor: 'var(--surface-dark-elevated)',
                        color: 'var(--on-dark)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      [{data.category}]
                    </span>
                    <span>id={data.id}</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => refetch()}
              disabled={isPending}
              className="text-base font-medium"
              style={{
                backgroundColor: 'var(--ink)',
                color: 'var(--canvas)',
                padding: '4px 20px',
                borderRadius: '4px',
              }}
            >
              [+] {m.generate_button()}
            </button>

            <button
              onClick={handleCopy}
              disabled={!data || isPending}
              className="text-base font-medium"
              style={{
                backgroundColor: 'var(--canvas)',
                color: 'var(--ink)',
                padding: '4px 20px',
                borderRadius: '4px',
                border: '1px solid var(--hairline-strong)',
              }}
            >
              {copied ? '[v]' : '[-]'} {copied ? m.copied_button() : m.copy_button()}
            </button>
          </section>
        </main>

        <footer
          className="pt-6 text-sm"
          style={{ borderTop: hairline, color: 'var(--mute)' }}
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <span>inspired by no-as-a-service</span>
            <a
              href="https://github.com/hotheadhacker/no-as-a-service"
              target="_blank"
              rel="noreferrer"
              className="underline"
              style={{ color: 'var(--ink)' }}
            >
              github.com/hotheadhacker/no-as-a-service
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FilterButton({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="text-base font-medium capitalize"
      style={{
        backgroundColor: selected ? 'var(--ink)' : 'var(--surface-card)',
        color: selected ? 'var(--canvas)' : 'var(--ink)',
        padding: '4px 16px',
        borderRadius: '4px',
        border: selected ? '1px solid var(--ink)' : '1px solid var(--hairline)',
      }}
    >
      {selected ? '[x]' : '[ ]'} {label}
    </button>
  )
}
