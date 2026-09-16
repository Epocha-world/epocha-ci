import { Globe2, Monitor, Moon, Sun, ChevronDown, Languages } from "lucide-react";
import { useI18n } from "@/i18n";
import type { Locale, ThemePreference } from "@/lib/preferences";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import "./PreferencesControls.css";

const themes = [
  { value: "system", label: "System", description: "Follow your device setting", icon: Monitor },
  { value: "light", label: "Light", description: "A warm, light canvas", icon: Sun },
  { value: "dark", label: "Dark", description: "A soft charcoal palette", icon: Moon },
] as const;

export function PreferencesControls({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { t, locale, localePreference, setLocale, themePreference, setThemePreference } = useI18n();
  const selectedTheme = themes.find((theme) => theme.value === themePreference) ?? themes[0];
  const ThemeIcon = selectedTheme.icon;
  const languageName = locale === "ko" ? "한국어" : "English";
  const languageDescription =
    localePreference === "auto" ? t("Automatic") + " · " + languageName : languageName;

  return (
    <div
      className={cn(
        "preferences-controls",
        compact ? "preferences-controls--compact" : "preferences-controls--expanded",
        className,
      )}
      role="group"
      aria-label={t("Display preferences")}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="preference-trigger"
            aria-label={t("Language") + ": " + languageDescription}
            title={t("Language") + ": " + languageDescription}
          >
            <Globe2 aria-hidden="true" data-icon="inline-start" />
            <span className="preference-trigger-label">
              {compact ? (locale === "ko" ? "한국어" : "EN") : t("Language")}
            </span>
            <ChevronDown aria-hidden="true" className="preference-chevron" data-icon="inline-end" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={10}
          collisionPadding={12}
          className="preferences-menu"
          aria-label={t("Language")}
        >
          <DropdownMenuLabel className="preferences-menu-heading">
            <span className="preferences-menu-title">{t("Language")}</span>
            <span className="preferences-menu-description">{t("Choose how you read EPOCHA.")}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={localePreference}
            onValueChange={(value) => setLocale(value as Locale | "auto")}
          >
            <DropdownMenuRadioItem
              indicatorPosition="end"
              value="auto"
              textValue={t("Automatic")}
              className="preference-option"
            >
              <span className="preference-option-icon">
                <Languages aria-hidden="true" />
              </span>
              <span className="preference-option-copy">
                <span className="preference-option-title">{t("Automatic")}</span>
                <span className="preference-option-description">
                  {t("Follow your browser language")}
                </span>
              </span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              indicatorPosition="end"
              value="ko"
              textValue="한국어"
              className="preference-option"
            >
              <span className="preference-option-icon preference-language-mark" aria-hidden="true">
                가
              </span>
              <span className="preference-option-copy">
                <span className="preference-option-title" lang="ko">
                  한국어
                </span>
                <span className="preference-option-description">{t("Korean")}</span>
              </span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              indicatorPosition="end"
              value="en"
              textValue="English"
              className="preference-option"
            >
              <span className="preference-option-icon preference-language-mark" aria-hidden="true">
                Aa
              </span>
              <span className="preference-option-copy">
                <span className="preference-option-title" lang="en">
                  English
                </span>
                <span className="preference-option-description">{t("English language")}</span>
              </span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {compact && <span className="preferences-divider" aria-hidden="true" />}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size={compact ? "icon" : "default"}
            className="preference-trigger"
            aria-label={t("Theme") + ": " + t(selectedTheme.label)}
            title={t("Theme") + ": " + t(selectedTheme.label)}
          >
            <ThemeIcon aria-hidden="true" data-icon="inline-start" />
            {!compact && (
              <>
                <span className="preference-trigger-label">{t("Theme")}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="preference-chevron"
                  data-icon="inline-end"
                />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={10}
          collisionPadding={12}
          className="preferences-menu"
          aria-label={t("Theme")}
        >
          <DropdownMenuLabel className="preferences-menu-heading">
            <span className="preferences-menu-title">{t("Appearance")}</span>
            <span className="preferences-menu-description">{t("Choose a comfortable view.")}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={themePreference}
            onValueChange={(value) => setThemePreference(value as ThemePreference)}
          >
            {themes.map(({ value, label, description, icon: Icon }) => (
              <DropdownMenuRadioItem
                key={value}
                indicatorPosition="end"
                value={value}
                textValue={t(label)}
                className="preference-option"
              >
                <span className="preference-option-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="preference-option-copy">
                  <span className="preference-option-title">{t(label)}</span>
                  <span className="preference-option-description">{t(description)}</span>
                </span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
