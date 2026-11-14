# Portfolio

Personal portfolio for Kefas Manda, a software developer focused on applied AI and building simple, reliable systems that scale.

**Live:** [kefas.co.za](https://www.kefas.co.za)

See [SEO.md](./SEO.md) for the SEO audit, verified results, and remaining deployment and content work. Site metadata is configured in `data/seo.ts`.

## Tech

- Next.js
- TypeScript
- React
- Lucide Icons

## Routes

- `/`: professional experience, selected work, capabilities, education, and contact
- `/schoolscape`: public, aggregate-only CRM data engineering project
- `/fineapp`: marketplace product case study, distinguishing the original implementation from the current listings and direct contact model
- `/index.md`, `/schoolscape.md`, and `/fineapp.md`: Markdown versions generated at build time from the same content data as the pages, with canonical links back to HTML

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```
