import { getLocale, locales, setLocale } from "#/paraglide/runtime";
import { m } from "#/paraglide/messages";

export default function LocaleSwitcher() {
  const currentLocale = getLocale();

  return (
    <select
      value={currentLocale}
      onChange={(e) => setLocale(e.target.value as (typeof locales)[number])}
      aria-label={m.language_label()}
      className="ds-select"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
