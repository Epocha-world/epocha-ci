# EPOCHA design system

EPOCHA uses a **Material 3-inspired design system** on its existing React, Tailwind and shadcn/Radix components. This is a brand adaptation, not an installation of MUI or Material Web, and not a claim of complete Material 3 conformance. No UI dependency was added.

The logo's yellow remains the primary action color. Warm paper surfaces and charcoal text give the light theme an editorial feel; charcoal surfaces and warm white text form the dark theme. Tonal yellow containers mark selection without filling entire menus with bright yellow.

## Token architecture

`src/design-system/tokens.css` is imported by `src/styles.css` and defines three levels:

1. **Reference:** `--ref-yellow`, `--ref-amber`, `--ref-neutral-*`. Raw OKLCH palette values belong here.
2. **Semantic:** `--surface`, `--on-surface`, `--primary-container`, `--outline`, etc. These describe a role, not a particular component.
3. **Component:** `--button-shape`, `--field-background`, `--menu-elevation`, `--panel-shape`. These map component families to semantic decisions.

The previous shadcn tokens (`--background`, `--card`, `--primary`, `--accent`, etc.) remain aliases. Existing editorial pages and React components therefore consume the same palette. `light-dark()` and the existing root `color-scheme` preference support automatic and manual themes without separate page-specific dark overrides.

| Role              | Token                                                           | Usage                                                     |
| ----------------- | --------------------------------------------------------------- | --------------------------------------------------------- |
| Canvas            | `--surface` / `--on-surface`                                    | Page and readable content                                 |
| Supporting text   | `--on-surface-variant`                                          | Descriptions, hints, menu labels                          |
| Surface hierarchy | `--surface-container-lowest`, `-low`, base, `-high`, `-highest` | From quiet canvas-adjacent surfaces to emphasized regions |
| Brand action      | `--primary` / `--on-primary`                                    | Yellow button with charcoal label                         |
| Selected / tonal  | `--primary-container` / `--on-primary-container`                | Selected menu row, tonal button, selected toggle          |
| Boundaries        | `--outline` / `--outline-variant`                               | Controls / subtle panel dividers                          |
| Accessible accent | `--brand-accent`                                                | Inline links, focus outline; darker ochre in light mode   |
| Error             | `--destructive` / `--destructive-foreground`                    | Error controls and destructive action                     |

Use the paired `on-*` text color with a container. Do not put white text on the yellow primary. `text-primary` is not suitable for small text on light backgrounds; use `text-brand-accent`.

## Shape, spacing, typography and motion

| Foundation       | Values / contract                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Spacing          | 4px grid: `--space-1/2/3/4/6/8` = 4/8/12/16/24/32px                                                                         |
| Shape            | Small 8px, medium 12px for fields and rows, large 16px for menus, extra-large 24px for cards; full pill for buttons/toggles |
| Interaction size | Standard controls 48px; compact controls 44px; do not shrink icon targets to icon size                                      |
| Display          | Responsive 2.1–4rem / 1.1 line-height, Space Grotesk with Korean fallback                                                   |
| Title            | 20px / 1.4, display family                                                                                                  |
| Body             | 16px / 1.65, Inter with Noto Sans KR fallback                                                                               |
| Label            | 14px / 1.5, semibold for actions                                                                                            |
| Elevation        | `--elevation-0/1/2/3`; cards use 1, anchored menus use 3                                                                    |
| Motion           | Short 150ms, medium 250ms, long 400ms; `--motion-standard` for normal state transitions                                     |
| States           | Hover 8% state layer; focus and pressed 12%; disabled opacity 0.38                                                          |

Existing expressive page headings and angular media remain editorial exceptions. Cards and menus receive rounded corners; the system does not round every page section. Motion reduction continues to disable animations and transitions globally.

## Components in use

The foundation is applied to `Button`, `Input`, `Textarea`, `Select`, `DropdownMenu`, `Card`, `Toggle` and `ToggleGroup`, plus existing `.btn-primary`, `.btn-secondary`, `.btn-outline` route links. Shared rules live under `@layer components` in `src/styles.css`. Preferences controls compose the existing `DropdownMenu` primitives and use the same semantic tokens.

### Buttons

```tsx
<Button>Primary action</Button>
<Button variant="tonal">Supporting action</Button>
<Button variant="outline">Alternative action</Button>
<Button variant="ghost" size="icon" aria-label="Open settings">
  <Settings data-icon="inline-start" />
</Button>
<Button asChild>
  <Link to="/practicums">Explore programs</Link>
</Button>
```

`default` maps to `.btn-primary`; `secondary` maps to `.btn-secondary`; `outline` maps to `.btn-outline`. The last two retain the same outlined appearance for compatibility with existing secondary route links. `tonal` provides the lower-emphasis filled treatment. `destructive`, `ghost`, and `link` are also supported. Default height is 48px, `sm` and `icon` are 44px, and `lg` is 56px. Prefer variants over color overrides in consumers.

### Menus and settings

Menu content has a 16px shape, subtle border, soft elevation, 8px inset and 48px minimum rows. Menu labels are quiet; selected rows use the tonal primary pair and an explicit indicator. Keyboard focus remains visible even on the selected row.

```tsx
<DropdownMenuRadioGroup value={value} onValueChange={setValue}>
  <DropdownMenuRadioItem value="system" indicatorPosition="end">
    System
  </DropdownMenuRadioItem>
</DropdownMenuRadioGroup>
```

`DropdownMenuRadioItem` adds `indicatorPosition?: "start" | "end"` to the existing Radix props. The default start indicator is a dot; `end` uses a trailing check. This option is visual only: Radix retains radio semantics, checked state, arrow-key navigation, typeahead and escape/focus restoration. Use a radio group for mutually exclusive settings. A native `Select` remains appropriate for form choices; theme/language are settings menus.

### Forms, cards and toggles

- `Input`, `Textarea`, and `SelectTrigger` share 12px corners, 48px minimum height, outlined boundaries, and readable surface fill. Textarea permits vertical resizing.
- Associate controls with labels. Mark invalid controls with `aria-invalid="true"` and connect explanatory text with `aria-describedby`.
- Cards use the existing header/title/description/content/footer composition with 24px shape and quiet elevation. Use existing layout classes for spacing rather than restyling colors.
- Toggles have an explicit selected tonal state and 44–48px hit targets. Group related options with `ToggleGroup`; provide an accessible group label and labels for icon-only options.

## Accessibility and verification

### Site preferences

`PreferencesControls` composes the shared radio menu with compact language/theme triggers. Its menu pairs an icon, native language name or theme label, supporting description and trailing selection check. The automatic choices remain explicit. Selected and keyboard-highlighted descriptions inherit their row's paired foreground rather than muted text, preserving contrast on tonal/state-layer backgrounds.

The header exposes both controls directly on mobile. Below 360px its logo footprint becomes smaller while controls retain 44px hit targets. The live-opportunity heading uses the shared responsive display scale to fit a 320px viewport. Filter selects render their current translated value during SSR.

All controls must support keyboard interaction and visible focus. Never rely on color alone for selected state. Keep explicit labels and checked indicators, retain disabled semantics, and avoid reducing hit targets below 44px. Korean copy must fit without truncating option labels; language changes must not discard a user's current route or form state.

For changes, verify light/dark/system themes, Korean/English, keyboard open/arrows/escape/focus return, manual persistence, no horizontal overflow at 360px, and reduced motion. Run tests, typecheck, lint, and build. Browser verification is still required: tokens alone cannot prove layout, contrast of custom overrides, or behavior.

## References

- [Material Web color roles](https://material-web.dev/theming/color/): semantic colors and paired on-colors.
- [Material Web menus](https://material-web.dev/components/menu/): temporary choice surfaces and menu interaction guidance.
- [shadcn Dropdown Menu](https://ui.shadcn.com/docs/components/radix/dropdown-menu): composition on the project's existing Radix foundation.

These sources informed the token and component choices. Runtime behavior remains provided by the existing Radix React implementation.
