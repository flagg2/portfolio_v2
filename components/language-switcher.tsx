"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const t = useTranslations("navigation");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">{t("switchLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link locale="en" href="." className="flex items-center">
            <ReactCountryFlag
              countryCode="GB"
              svg
              className="mr-2"
              title={t("english")}
            />
            {t("english")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link locale="sk" href="." className="flex items-center">
            <ReactCountryFlag
              countryCode="SK"
              svg
              className="mr-2"
              title={t("slovak")}
            />
            {t("slovak")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
