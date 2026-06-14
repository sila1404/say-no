import { useLayoutEffect, useState } from 'react'
import { m } from '#/paraglide/messages'

type Theme = 'light' | 'dark'

function getCurrentTheme(): Theme {
  if (typeof document === 'undefined') return 'light'

  return document.documentElement.classList.contains('dark')
    ? 'dark'
    : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getCurrentTheme())

  useLayoutEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark',
    )

    document.documentElement.classList.toggle(
      'light',
      theme === 'light',
    )
  }, [theme])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'

    setTheme(next)
    localStorage.setItem('theme', next)
  }

  return (
    <button onClick={toggle}>
      {theme === 'light'
        ? `[${m.theme_light()}]`
        : `[${m.theme_dark()}]`}
    </button>
  )
}
