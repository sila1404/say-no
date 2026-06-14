import { paraglideMiddleware } from '#/paraglide/server'
import handler from '@tanstack/react-start/server-entry'

export default {
  fetch(req: Request): Promise<Response> {
    // TanStack Router handles URL rewriting via deLocalizeUrl/localizeUrl,
    // so we pass the original request instead of the delocalized one.
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}
