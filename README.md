# Say No

Generate a polite (or absurd) excuse to decline anything.

## Stack

- [TanStack Start](https://tanstack.com/start) – full-stack React framework
- [TanStack Router](https://tanstack.com/router) – file-based routing
- [TanStack Query](https://tanstack.com/query) – server state
- [Tailwind CSS](https://tailwindcss.com/) – styling
- [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) – i18n

## Features

- Random excuse generator with category filters
- Copy to clipboard
- Light / dark theme toggle
- Language switcher (English / Deutsch)
- Localized 404 page

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run preview
```

## Test

```bash
npm run test
```

## Project structure

```
src/
  routes/         # TanStack Router routes
  components/     # UI components
  functions/      # Server functions
  lib/            # Utilities
  integrations/   # TanStack Query provider
  styles.css      # Theme tokens + Tailwind
messages/         # i18n messages
```

## Credits

Inspired by [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service).

## License

MIT
