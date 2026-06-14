import { deLocalizeUrl, localizeUrl } from '#/paraglide/runtime'
import type { LocationRewrite } from '@tanstack/react-router'

export const localeRewrite: LocationRewrite = {
  input: ({ url }) => deLocalizeUrl(url),
  output: ({ url }) => localizeUrl(url),
}
