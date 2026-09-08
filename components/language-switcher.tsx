"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";

const LANGUAGES = [
  { locale: "en", country: "GB", label: "english" },
  { locale: "sk", country: "SK", label: "slovak" },
] as const;

export function LanguageSwitcher() {
  const t = useTranslations("navigation");
  const active = useLocale();
  /**
   * The locale-stripped path of the page we are on, so switching keeps the
   * reader on it. `href="."` used to stand in for this, but next-intl leaves
   * relative hrefs alone — both entries rendered the identical `.`, and the
   * only thing telling the two apart was a cookie write the router never had
   * to honour.
   */
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">{t("switchLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map(({ locale, country, label }) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={pathname}
              locale={locale}
              hrefLang={locale}
              aria-current={locale === active ? "true" : undefined}
              className="flex items-center"
            >
              <ReactCountryFlag
                countryCode={country}
                svg
                className="mr-2"
                title={t(label)}
              />
              {t(label)}
              {locale === active && (
                <Check className="ml-auto h-4 w-4" aria-hidden="true" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
