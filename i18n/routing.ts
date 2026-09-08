import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "sk"],

  // Used when no locale matches
  defaultLocale: "en",

  /**
   * Both locales carry their prefix, so every page has one address that names
   * its language. With `as-needed` the English URL is the bare `/`, which the
   * middleware then has to resolve by cookie on every request — and a language
   * link pointing at `/` is indistinguishable from "stay where you are".
   */
  localePrefix: "always",
});
