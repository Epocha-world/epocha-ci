import { Globe2, Monitor, Moon, Sun } from "lucide-react";
import { useI18n } from "@/i18n";
import { isLocale, isThemePreference } from "@/lib/preferences";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

const themes = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

export function PreferencesControls({ compact = false }: { compact?: boolean }) {
  const { t, locale, localePreference, themePreference, setLocale, setThemePreference } = useI18n();
  const selectedTheme = themes.find((theme) => theme.value === themePreference) ?? themes[0];
  const ThemeIcon = selectedTheme.icon;
  return (
    <div className="flex items-center gap-1" role="group" aria-label={t("Display preferences")}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            aria-label={`${t("Language")}: ${locale === "ko" ? "한국어" : "English"}`}
          >
            <Globe2 aria-hidden="true" data-icon="inline-start" />
            <span>{compact ? (locale === "ko" ? "한국어" : "EN") : t("Language")}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8}>
          <DropdownMenuGroup>
            <DropdownMenuLabel>{t("Language")}</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={localePreference}
              onValueChange={(value) => {
                if (value === "auto" || isLocale(value)) setLocale(value);
              }}
            >
              <DropdownMenuRadioItem value="auto">{t("Automatic")}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="en">
                <span lang="en">English</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="ko">
                <span lang="ko">한국어</span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size={compact ? "icon" : "default"}
            aria-label={`${t("Theme")}: ${t(selectedTheme.label)}`}
          >
            <ThemeIcon aria-hidden="true" data-icon="inline-start" />
            {!compact && t("Theme")}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8}>
          <DropdownMenuGroup>
            <DropdownMenuLabel>{t("Appearance")}</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={themePreference}
              onValueChange={(value) => {
                if (isThemePreference(value)) setThemePreference(value);
              }}
            >
              {themes.map(({ value, label, icon: Icon }) => (
                <DropdownMenuRadioItem key={value} value={value}>
                  <span className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="size-4" />
                    {t(label)}
                  </span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
