import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "sk"],

  // Used when no locale matches
  defaultLocale: "en",

  // Automatically detect the user's locale
  localeDetection: true,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(sk|en)/:path*"],
}
