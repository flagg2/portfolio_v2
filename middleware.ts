import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

/**
 * Built from `routing` rather than a second copy of the locale list: the
 * `Link`/`usePathname` helpers in `i18n/navigation.ts` are built from the same
 * object, and when the two disagree about `localePrefix` the links point at
 * addresses the middleware then sends somewhere else.
 */
export default createMiddleware(routing)

export const config = {
  // Everything except Next.js internals and files with an extension
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
}
