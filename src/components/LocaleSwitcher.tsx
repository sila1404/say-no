import { getLocale, locales, setLocale } from '#/paraglide/runtime'
import { m } from '#/paraglide/messages'

export default function LocaleSwitcher() {
  const currentLocale = getLocale()

  return (
    <select
      value={currentLocale}
      onChange={(e) => setLocale(e.target.value)}
      aria-label={m.language_label()}
      className="text-sm font-medium uppercase tracking-wide"
      style={{
        backgroundColor: 'var(--surface-card)',
        color: 'var(--ink)',
        padding: '4px 12px',
        borderRadius: '4px',
        border: '1px solid var(--hairline)',
      }}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
