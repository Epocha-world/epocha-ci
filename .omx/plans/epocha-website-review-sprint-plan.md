# EPOCHA Website Review Sprint Plan

Source document: `Epocha website review.docx`
Date: 2026-05-26
Role lens: Product Owner / Project Manager

## Requirements Summary

The requested update is a content, branding, imagery, and page-structure refresh across the EPOCHA website. The work affects:

- Shared layout: logo in header/footer, footer navigation, cookie/privacy copy, social links.
- Home page: hero copy and image, visual background cleanup, section reordering, new quote block, moved/renamed sections, upcoming practicums cards.
- Practicums page: hero copy/image, moved "What you gain" content, practicum card images/statuses, deletion of comparison section, CTA copy.
- About page: hero copy/image removal, text updates, icon removal, additional CTA, global-network copy, hidden values page updates.
- Partner page: hero copy, icon removal, partner logo/content section, CTA copy.
- Connect page: remove red "Connect" eyebrow and connect the form to CRM or email.

Current implementation surface:

- Home route: `src/routes/index.tsx`, especially hero and section blocks around lines 24, 58, 87, 103, 127, 156, and 190.
- Practicums route: `src/routes/practicums.tsx`, especially hero, tracks, comparison, and CTA around lines 32, 50, 74, 102, and 104.
- About route: `src/routes/about.tsx`, especially hero, approach cards, global network, and CTA around lines 22, 70, 84, and 105.
- Partner route: `src/routes/partner.tsx`, especially hero, audience cards, and CTA around lines 20, 32, 46, and 52.
- Shared header/footer: `src/components/Header.tsx` and `src/components/Footer.tsx`.
- Connect route: `src/routes/connect.tsx`.
- Current assets: `src/assets/hero.jpg`, `src/assets/leadership.jpg`, `src/assets/team.jpg`, `src/assets/student.jpg`, `src/assets/pattern.jpg`.

## Product Goals

- Make EPOCHA branding consistent by replacing placeholder green-circle marks with the official logo.
- Align page copy with the reviewed business language and remove coral/red emphasis where the document requests black or green.
- Replace AI-generated imagery with approved stock photos.
- Improve information architecture by moving duplicated sections to their intended pages.
- Make partner and connect flows more actionable.
- Keep each PR small enough to review independently.

## Open Inputs / Blockers

- Official EPOCHA logo asset is required.
- Stock photos 1-5 are required, with source filenames or approved URLs.
- Partner logo assets are required for PEN Worldwide, KoreaPEN, The Seagull Films, QualitaX, and UpperClass if the page should show actual logos rather than text placeholders.
- CRM target is unspecified. Until confirmed, use `mailto:hello@epocha.world` as the implementation path for the connect form.
- The values page route is not visible in the current route files. Creating or updating it needs a codebase check for whether it exists outside the currently inspected files.

## Sprint 1: Brand, Assets, And Shared Layout

Goal: Prepare shared brand assets and navigation/footer changes so page-specific sprints can reuse them.

Tasks:

1. PR-01: Confirm approved brand and stock asset inputs.
   - Scope: Confirm official logo file, stock photos 1-5, partner/social URLs, and Privacy & Cookies Policy target. Do not crop production assets from DOCX screenshots unless the Product Owner explicitly approves.
   - Estimate: 30 min.
   - Acceptance: Sprint has exact asset filenames/URLs and link destinations before irreversible visual implementation continues.

2. PR-02: Add reusable interim brand mark component.
   - Scope: Add a small shared brand component and replace the green-circle placeholder in `src/components/Header.tsx` and `src/components/Footer.tsx` with an interim text mark until the official logo file is provided.
   - Estimate: 30 min.
   - Acceptance: Header/footer no longer render the green-circle placeholder; code has one shared replacement point for the official logo asset.

3. PR-03: Update footer copy and internal navigation labels.
   - Scope: Update `src/components/Footer.tsx` brand text, HOME/Practicums/About/Partner/Epocha X UpperClass/CONNECT labels, email, Let's talk, and cookie sentence. Social/policy items remain non-linked until URLs/routes are confirmed.
   - Estimate: 30 min.
   - Acceptance: Footer has requested text without broken placeholder links.

4. PR-04: Create stock-photo mapping table.
   - Scope: Add an implementation note mapping stock photo 1-5 to final semantic filenames, target page sections, required crop/aspect ratio, and source approval status.
   - Estimate: 30 min.
   - Acceptance: Dev can add image files without guessing which photo belongs to which page section.

5. PR-05: Define shared label/accent utility contract.
   - Scope: Add or document a small shared class strategy for section eyebrows/labels in `src/styles.css`; adopt it page-by-page in later sprints.
   - Estimate: 25 min.
   - Acceptance: Later page PRs can replace coral/red labels consistently without touching unrelated sections.

Sprint 1 Review:

- Approved logo/social/policy/photo inputs are either present or explicitly listed as blocked.
- Header/footer no longer show the green-circle placeholder.
- Footer has complete requested text and no broken placeholder links.
- Stock photo mapping is ready for page sprints.
- `bun run build` passes.
- Changed files pass targeted lint.

Sprint 1 status as of 2026-05-26:

- Dev: PR-02 and PR-03 are implemented in `src/components/BrandLogo.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx`.
- Dev: Official dark logo assets were added as `src/assets/epocha-logo-full-dark.png` and `src/assets/epocha-logo-compact-dark.png`.
- Design: DOCX media were reviewed and classified as mockup screenshots, not clean production assets.
- Review: Sprint 1 full completion is still blocked until stock photos 1-5, social URLs, and policy target are supplied.

## Sprint 2: Home Page Refresh

Goal: Update the Home page to match the reviewed narrative, visual hierarchy, section order, and upcoming practicums content.

Tasks:

1. PR-06: Update Home hero copy, background, and image.
   - Scope: In `src/routes/index.tsx` hero block around line 24, remove youth eyebrow/stars, change H1 to "The #1 project-based practicum experience for youth aged 14-29", remove pattern background, apply light orange background, replace image with stock photo 1.
   - Estimate: 30 min.
   - Acceptance: Hero has no pattern image, no "For youth aged 14-29" eyebrow, and uses requested copy and stock image.

2. PR-07: Update "Who we serve" section.
   - Scope: In `src/routes/index.tsx` around line 58, white background, black eyebrow, replace educational institution/non-profit icons, update all three content cards.
   - Estimate: 30 min.
   - Acceptance: Section copy matches document; "Who we serve" is black, not coral/red.

3. PR-08: Replace stats section with practicum quote section.
   - Scope: In `src/routes/index.tsx` around line 87, remove numbers and associated text, add light-orange quote block: "Offering project-based practicums. Better than work-based internships."
   - Estimate: 25 min.
   - Acceptance: No stats remain on Home; quote section uses approved light orange.

4. PR-09: Replace Home "What you gain" with Internship vs Practicum teaser.
   - Scope: In `src/routes/index.tsx` around line 103, remove existing cards and add requested "INTERNSHIP VS EPOCHA PRACTICUM" title and "Not all experience is created equal" copy in black with white background.
   - Estimate: 30 min.
   - Acceptance: Existing "What you gain" cards are no longer on Home; Home uses the requested replacement section.

5. PR-10: Move/rework Home approach and CTA sections.
   - Scope: In `src/routes/index.tsx` around lines 156 and 190, change "OUR APPROACH" to black, use green numbers instead of icons/red numbers, update copy, and remove "Join thousands..." from CTA.
   - Estimate: 30 min.
   - Acceptance: Approach section copy matches document; icons removed from approach cards; CTA no longer includes removed sentence.

6. PR-11: Add "Upcoming Practicums" section at bottom of Home.
   - Scope: In `src/routes/index.tsx` around line 127 or after CTA, move upcoming section to bottom, rename to "UPCOMING PRACTICUMS", keep "View all", remove International Youth Leadership card, keep two requested cards, change status to green "Coming soon (June, 1)".
   - Estimate: 30 min.
   - Acceptance: Home shows only EPOCHA Practicums and Hanaro cards; status links point to `/practicums` until dedicated practicum pages exist.

Sprint 2 Review:

- Home page has the requested section order and all Home-specific copy changes.
- Removed content is not duplicated accidentally elsewhere.
- Visual review confirms no coral/red headings where the document requested black or green.
- `bun run build` passes after Home changes.

## Sprint 3: Practicums Page Refresh

Goal: Make the Practicums page the main destination for detailed practicum value, tracks, images, and contact CTA.

Tasks:

1. PR-12: Update Practicums hero.
   - Scope: In `src/routes/practicums.tsx` around line 32, replace hero image with stock photo 2, change eyebrow to black "YOUR PRACTICUM", and update paragraph copy.
   - Estimate: 30 min.
   - Acceptance: Hero copy matches document; no coral/red eyebrow; stock photo 2 renders.

2. PR-13: Add moved "What you gain" section to Practicums.
   - Scope: Add the moved Home "What you gain" content to `src/routes/practicums.tsx`, with light orange background, black heading, green icons, and diploma icon replacing trophy.
   - Estimate: 30 min.
   - Acceptance: Practicums includes "WHAT YOU GAIN"; icons are green; trophy icon is not used.

3. PR-14: Update practicum track cards.
   - Scope: In `src/routes/practicums.tsx` around line 50, replace card images with stock photos 3, 4, 5; set International Youth Leadership status to "Closed"; set other statuses green and linkable toward future details.
   - Estimate: 30 min.
   - Acceptance: Three cards use distinct approved images; status text and colors match requested behavior.

4. PR-15: Delete Practicums comparison section.
   - Scope: Remove the "Internship vs EPOCHA Practicum" section around line 74 from `src/routes/practicums.tsx`.
   - Estimate: 20 min.
   - Acceptance: Comparison section no longer appears on Practicums page.

5. PR-16: Update Practicums CTA copy.
   - Scope: In `src/routes/practicums.tsx` around line 104, replace "Apply for 2026" with "Get in touch".
   - Estimate: 10 min.
   - Acceptance: Primary CTA links to `/connect` and displays "Get in touch".

Sprint 3 Review:

- Practicums page owns the detailed value proposition.
- Deleted comparison content is not present on Practicums and is represented appropriately on Home.
- Build passes and all images resolve.

## Sprint 4: About And Values Content

Goal: Align About page with the revised company story and add/update the non-menu values page content.

Tasks:

1. PR-17: Update About hero and remove hero image section.
   - Scope: In `src/routes/about.tsx` around line 22, remove AI-generated image section, use black "WHO WE ARE", update headline and paragraph copy.
   - Estimate: 30 min.
   - Acceptance: About hero matches requested text; standalone image section is removed.

2. PR-18: Update About value/mission cards and remove icons.
   - Scope: In `src/routes/about.tsx` around line 70, remove icons, update "What we do", "What We Want", "Who We Work With" copy, and add "For Organization" button.
   - Estimate: 30 min.
   - Acceptance: Three blocks render without icons and include requested copy plus button.

3. PR-19: Update About global network section.
   - Scope: In `src/routes/about.tsx` around line 84, update PEN Worldwide text, card titles/body/quotes, and replace "Get in touch" CTA with "Our value".
   - Estimate: 30 min.
   - Acceptance: Global network copy matches document and CTA routes to values page.

4. PR-20: Create or update hidden values page route.
   - Scope: Add/update route for values page without adding it to the menu; update "EPOCHA LEARDERSHIP PROGRAM" to "EPOCH PRACTICUMS"; remove founding-principle block; update text and strategic partnership section.
   - Estimate: 30 min.
   - Acceptance: Values page is reachable from About CTA but not listed in header navigation.

5. PR-21: About page metadata update.
   - Scope: Update `head()` metadata in `src/routes/about.tsx` to reflect revised business copy and no removed image dependency if applicable.
   - Estimate: 15 min.
   - Acceptance: Meta description aligns with revised About page content.

Sprint 4 Review:

- About page tells the revised EPOCHA story with no outdated icon-led blocks.
- Values page is reachable but absent from menu as requested.
- All About/Values CTAs route correctly.
- Build passes and no missing route-tree generation changes are left unstaged.

## Sprint 5: Partner And Connect Conversion

Goal: Finish partner credibility and lead-capture flow.

Tasks:

1. PR-22: Update Partner hero copy.
   - Scope: In `src/routes/partner.tsx` around line 20, replace hero paragraph with requested career-ready talent pipeline copy.
   - Estimate: 20 min.
   - Acceptance: Partner hero copy exactly reflects document intent.

2. PR-23: Remove Partner audience-card icons.
   - Scope: In `src/routes/partner.tsx` around line 32, remove icons from Businesses, Educational Institutions, and Non-profits cards.
   - Estimate: 20 min.
   - Acceptance: Cards remain readable and balanced without icons.

3. PR-24: Add Partner logos and partner profile section.
   - Scope: Add new section with partner logo area and text for PEN Worldwide, KoreaPEN, QualitaX, UpperClass, and The Seagull Films Korea.
   - Estimate: 30 min.
   - Acceptance: Section heading says "Our Partners"; partner entries include requested names and descriptions; logos render if provided.

4. PR-25: Update Partner CTA.
   - Scope: In `src/routes/partner.tsx` around line 46, replace "Global standard" usage if present, change CTA from "Get in touch" or "Start the conversation" to "Partner with us".
   - Estimate: 20 min.
   - Acceptance: CTA copy and destination support partner conversion.

5. PR-26: Update Connect page label and form behavior.
   - Scope: In `src/routes/connect.tsx`, remove red "Connect" eyebrow and connect form to CRM if details exist; otherwise improve `mailto:hello@epocha.world` submission with prefilled subject/body.
   - Estimate: 30 min.
   - Acceptance: No red "Connect" label remains; form submission produces a usable lead path.

Sprint 5 Review:

- Partner page includes credibility through partner profiles/logos.
- Connect page has a working lead path.
- CRM gap is either resolved or explicitly documented as email fallback.
- Build passes and Vercel preview deploy succeeds.

## Final Release Verification

- Run `bun run build`.
- Run `bun run lint`; known current blocker is repo-wide Prettier errors, so either format in a separate PR or document the lint exception before release.
- Smoke-test routes: `/`, `/practicums`, `/about`, values route, `/partner`, `/connect`.
- Check responsive layouts at mobile and desktop widths.
- Verify header/footer links.
- Verify all images and partner logos load in the Vercel preview deployment.
- Verify Connect form behavior sends users to CRM or email with usable content.

## Acceptance Criteria

- All reviewed document copy changes are implemented or documented as blocked by missing assets/CRM details.
- Each sprint contains 4-6 PR-sized tasks.
- Each task is scoped to 30 minutes or less.
- Each sprint has a review gate with measurable pass/fail checks.
- The website builds successfully after each sprint.
- Vercel preview deploy is checked before production confidence is claimed.

## Recommended Execution Order

1. Sprint 1 first, because logo/assets/shared footer changes unblock consistent page work.
2. Sprint 2 next, because Home is the highest-visibility page and has the most structure changes.
3. Sprint 3 after Home, because content is moved from Home to Practicums.
4. Sprint 4 next, because About and Values share narrative/CTA dependencies.
5. Sprint 5 last, because partner logos and CRM details are the most likely external blockers.
