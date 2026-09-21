# v1 website update

This update keeps v1 content and routes where possible while applying the September 18 website brief. It adds English/Korean preferences, light/dark/system themes, age-based practicum discovery, camp subpages, public capstone discovery, Sparked participation sections and News.

## Content ownership

- Program names, age bands and registration labels: `src/lib/programs.ts`.
- New homepage sections and the relocated hero/outcomes: `src/components/home/`.
- Camp overview, leadership tracks, coaching, admissions and discovery: `src/routes/practicums_.startup-lab-camp*.tsx`.
- Sponsor, volunteer and resource-sharing copy: `src/routes/about_.sparked.tsx`.
- Korean source-message translations: `src/i18n/messages/v1-*.ts`. Keep English keys and interpolation variables aligned. The translator preserves paragraph breaks.

## Capstones

`src/lib/camp-capstones.ts` deliberately starts with an empty `verifiedPublicRecords` array. The six unverified v2 examples are not advertised as live projects.

Add only operator-verified public records matching `CampCapstone`: a stable slug ID, track/field, title, partner, summary, full brief, deliverables, skills, format, location, dates, fees, HTTPS registration URL, verification timestamp and closing timestamp. Invalid, duplicate, future-verified and closed records are excluded. Add Korean source strings to `v1-camp.ts`.

The list, combined search/filter and public detail use the same records. Registration links go to the operator's verified external provider. There is no new account system, payment processor, live capacity feed or CMS. The interface does not claim remaining seats or real-time updates. Publishing catalogue changes requires a site deployment.

## News

Add real articles to `newsArticles` in `src/lib/news.ts`. Each needs a stable ID, title, summary, category (`epocha` or `sparked`), publication date (`YYYY-MM-DD`) and a verified same-site article path or HTTPS URL. Only published articles belong in this collection; there is no scheduling or CMS. Link to an existing article rather than a nonexistent internal detail page. Add Korean title/summary keys to `v1-about.ts`.

`/news?category=sparked` filters the shared catalogue. No articles are invented, and the deleted launch event is not republished automatically.

## Routes and preferences

- Unexposed routes `/home-demo`, `/how-hpi-works`, `/hpi-assessment`, `/events`, `/about/partnerships`, `/practicums/hanaro-marketing` and `/events/launch-event` have been removed and return the shared HTTP 404 page.
- The linked `/practicums/hanaro-marketing/voices-in-motion` page remains available, as do the article and three published capstone details.
- Existing training hashes and the camp `#startup-lab` anchor remain usable.
- Preferences use `epocha_locale` and `epocha_theme` cookies. Initial SSR state is request-local; language changes retain React form state.
- Personalised HTML uses `private, no-store` plus `Vary: Cookie, Accept-Language`. Static files and the sitemap retain independent caching.

## Checks

Use Node 24 (the verified development runtime) and the existing installed dependencies:

```sh
node --test tests/*.test.ts
node node_modules/typescript/bin/tsc --noEmit
node node_modules/eslint/bin/eslint.js .
node node_modules/vite/bin/vite.js build
```

Equivalent package scripts are `test`, `typecheck`, `lint` and `build`. Direct commands were used here because the local pnpm launcher attempted an unrelated automatic dependency installation. No application dependency or lockfile change is required.

Before publishing, confirm the supplied registration-status copy, summer year/dates and current fees. The document contains a video screenshot but no video source, so Home uses an existing training photo. External forms, email, WhatsApp and payments were not submitted during QA. Existing founder-name inconsistencies and HPI email-report claims were preserved rather than inventing operational facts.
