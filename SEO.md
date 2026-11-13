# SEO audit and next steps

Audited 13 November 2026. Scope: the live homepage, live crawling configuration, repository source, and both pages in the updated local production build.

## Assessment

The portfolio has a strong technical foundation: static HTML, useful project and experience content, descriptive image alt text, HTTPS, a sitemap, and Person structured data. Lighthouse's SEO score measures a limited set of technical checks; it does not measure rankings, search demand, backlinks, or content competitiveness.

Mobile Lighthouse lab measurements using headless Brave and the default mobile settings:

| Homepage                       | Performance | Accessibility | Best practices | SEO | LCP   | CLS | Total blocking time |
| ------------------------------ | ----------- | ------------- | -------------- | --- | ----- | --- | ------------------- |
| Live, before these changes     | 99          | 92            | 100            | 100 | 1.3 s | 0   | 110 ms              |
| Updated local production build | 100         | 92            | 100            | 100 | 1.1 s | 0   | 50 ms               |

These are single lab runs on different origins, not evidence of a production speed improvement. They do not establish real visitor Core Web Vitals or INP. Production enables Vercel analytics and Speed Insights when `VERCEL` is set; local results exclude those scripts.

## Findings and implemented fixes

| Priority | Finding and evidence                                                                                                              | Change                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| High     | The live apex domain redirects to `www.kefas.co.za`, while canonical tags, sitemap entries, and entity URLs used the apex domain. | Centralized the production origin in `data/seo.ts` and aligned metadata, robots, sitemap, and structured data with the served hostname. |
| Medium   | Schoolscape only overrode its title, description, and canonical. It inherited the homepage Open Graph URL/title and Twitter copy. | Added complete page-specific social metadata while retaining the shared branded image.                                                  |
| Medium   | The introduction described a developer without naming them; location appeared separately.                                         | Added Kefas Manda and Cape Town naturally to the visible introduction and homepage metadata.                                            |
| Medium   | Person markup existed without stable identifiers connecting the person, homepage, and project.                                    | Added stable entity IDs, homepage WebSite/WebPage data, project WebPage/CreativeWork data, and escaped JSON-LD serialization.           |
| Low      | Both sitemap entries claimed the same August date despite newer homepage content.                                                 | Removed unsupported modification dates. Add `lastModified` only when actual content revision dates are tracked.                         |
| Optional | No concise agent overview.                                                                                                        | Added `/llms.txt` and a `rel="describedby"` discovery link. This is an agent convenience, not a promised ranking improvement.           |

## Remaining work

1. **After deployment:** inspect both URLs in Google Search Console, check Google's selected canonical, and submit `https://www.kefas.co.za/sitemap.xml`. Establish impressions, clicks, queries, indexed pages, and field performance as the baseline. Search Console data was not available during this audit.
2. **Hosting:** the apex-to-www redirect currently returns HTTP 307. Configure a permanent 301 or 308 at the hosting layer if www remains the primary domain. Recheck HTTP, HTTPS, and both hostname variants after deployment.
3. **Cloudflare:** live robots.txt contains Cloudflare-managed crawler restrictions in addition to the application's output. Review actual search and agent access after deployment, including WAF challenges. Preserve the owner's training restrictions unless they explicitly choose otherwise. Confirm that the canonical sitemap reference survives Cloudflare's processing.
4. **Content:** turn the strongest projects into substantive individual case studies. Agent Relay and Learn MCP are candidates for searches about agent infrastructure and Model Context Protocol. Explain the problem, architecture, tradeoffs, personal contribution, measured results where supported, and source/demo links. Link each case study from the homepage. Do not create thin pages merely to target keyword variations.
5. **Authority:** link the portfolio from public GitHub and LinkedIn profiles, relevant project READMEs, and genuine contributions. Earn references through useful technical work and writing. Backlink quality and coverage were not measured in this audit.
6. **Accessibility:** Lighthouse reports prohibited `aria-label` usage on generic CountUp spans and contrast failures, including footer text and content caught during scroll reveal animations. Review these in a dedicated accessibility pass; the current score is 92.

## Verification

- Production build, ESLint, and TypeScript checks pass.
- Both rendered pages have the expected canonical, matching Open Graph URL, page-specific title/description, and parseable JSON-LD.
- `/llms.txt` returns HTTP 200 as plain text and `/opengraph-image` returns HTTP 200 as PNG.
- Browser checks at 390 × 844 found one H1 per page, no missing image alt attributes, and no horizontal overflow.
- The homepage introduction and selected project content remain available with JavaScript disabled.
- Repository-wide Prettier check flags a pre-existing formatting issue in `next.config.ts`; the changed application files pass formatting.

## References

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [SEO Audit skill used for the audit framework](https://github.com/coreyhaines31/marketingskills/blob/main/skills/seo-audit/SKILL.md)
- [llms.txt proposal](https://llmstxt.org/)
