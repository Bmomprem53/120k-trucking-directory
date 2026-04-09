# Airtable integration

The app reads from base `AIRTABLE_BASE_ID` using `AIRTABLE_TOKEN`.

## Tables

### `Companies` (recommended fields)

| Field (any of these names) | Purpose |
|-----------------------------|---------|
| Name / Company | Display name |
| Slug / URL Slug | URL segment for `/directory/[slug]` |
| Category | Lane or category label (matched to regulatory categories when possible) |
| Pay Range / Pay | Shown on cards and profile |
| Hiring Status / Status | e.g. Open, Hiring, Active |
| Overview / Company Overview | Company overview section |
| Real Hiring Picture / Hiring Picture | “Real hiring picture” section |
| Insider Perspective / Insider | Insider section |
| Alignment Check / Alignment | Alignment section |

### `Categories` (optional)

If present, rows can include **Slug** (e.g. `frac-sand-logistics`) and/or **Name** matching the static category name, plus optional **Company Count**. If counts are omitted, the app derives counts from `Companies`.

## Static categories

The four regulatory arbitrage lanes are defined in `lib/regulatory-categories.ts` and merged with Airtable counts.
