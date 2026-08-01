import type { SchoolscapeProject } from "@/types/schoolscape";

export const schoolscapeProject: SchoolscapeProject = {
  title: "Schoolscape CRM data engineering",
  summary:
    "A large-scale reconciliation and migration-preparation programme that turned fragmented education CRM data into a controlled, validated account base with preserved relationships and an evidence-backed handover.",
  role: "Web Developer and Database Support Specialist",
  engagement: "17 June to 31 July 2026 full-time; part-time from August 2026",
  location: "Stellenbosch, South Africa",
  metrics: [
    {
      value: "31,675",
      label: "Starting account rows",
      detail: "Across the initial CRM population and linked source data.",
    },
    {
      value: "26,435",
      label: "Authoritative accounts",
      detail: "After consolidation, enrichment, additions, and final review.",
    },
    {
      value: "33,167",
      label: "Contacts retained",
      detail: "With communication permissions audited separately.",
    },
    {
      value: "5,301",
      label: "Rows consolidated",
      detail: "Duplicate or linked accounts removed from the working base.",
    },
  ],
  pipeline: [
    {
      title: "Audit the sources",
      detail:
        "Separate test, invalid, internal, supplier, and out-of-scope records without overwriting the original workbooks.",
    },
    {
      title: "Link with evidence",
      detail:
        "Combine exact and domain matching, reviewed fuzzy candidates, validation rules, and manual research.",
    },
    {
      title: "Preserve identity",
      detail:
        "Anchor comparisons to CRM record IDs and redirect removed accounts to controlled survivors.",
    },
    {
      title: "Validate the delivery",
      detail:
        "Rebuild totals independently, isolate uncertain records, and document every remaining limitation.",
    },
  ],
  workstreams: [
    {
      title: "Source cleanup",
      detail: "Reviewed test records, false positives, and scope boundaries.",
      result: "33,167 contacts preserved",
    },
    {
      title: "Trusted enrichment",
      detail: "Matched cleaned school data and verified ISASA and IEB sources.",
      result: "2,398 approved matches",
    },
    {
      title: "Duplicate consolidation",
      detail:
        "Merged linked accounts while maintaining contact-to-account references.",
      result: "5,301 rows consolidated",
    },
    {
      title: "Field normalisation",
      detail:
        "Standardised names, locations, phones, grades, fees, and classifications.",
      result: "9 major fields",
    },
    {
      title: "Kenya expansion",
      detail:
        "Researched and prepared verified schools as a controlled append.",
      result: "140 accounts added",
    },
    {
      title: "Permission audit",
      detail:
        "Reconstructed contact consent and applied unsubscribe precedence.",
      result: "2,280 decisions applied",
    },
    {
      title: "Business classification",
      detail:
        "Separated suppliers and replaced legacy labels with six useful categories.",
      result: "100% classified",
    },
    {
      title: "Final reconciliation",
      detail:
        "Checked identities, totals, controlled values, and unrelated changes.",
      result: "Validation passed",
    },
  ],
  fieldOutcomes: [
    {
      field: "Annual school fees",
      result: "6.1% → 85.9%",
      detail: "Coverage using controlled fee bands and verified rules.",
    },
    {
      field: "School grade level",
      result: "19,938 populated",
      detail: "Raw variants mapped into eight approved categories.",
    },
    {
      field: "Phone",
      result: "18,321 standardised",
      detail: "Malformed values remained visibly flagged rather than guessed.",
    },
    {
      field: "Country",
      result: "100% populated",
      detail: "South Africa, Kenya, and other countries remained distinct.",
    },
    {
      field: "Organisation description",
      result: "100% classified",
      detail: "All 26,435 accounts resolved into six business categories.",
    },
  ],
  principles: [
    {
      title: "Preserve sources",
      detail: "Original workbooks were never overwritten.",
    },
    {
      title: "Use stable identities",
      detail: "26,240 shared CRM record IDs anchored comparisons.",
    },
    {
      title: "Do not invent certainty",
      detail: "Unsupported values were left blank or explicitly flagged.",
    },
    {
      title: "Check independently",
      detail:
        "Final counts, permissions, identifiers, and taxonomies were rebuilt and reconciled.",
    },
  ],
  handover: [
    {
      title: "Stakeholder dashboard",
      detail:
        "A browsable view of outcomes, field quality, work completed, required CRM actions, validation, and approved evidence.",
    },
    {
      title: "Glimmer",
      detail:
        "An AI-assisted retrieval interface grounded in project evidence, with page context and source-aware answers.",
    },
    {
      title: "Migration package",
      detail:
        "Import-ready account and contact files, redirect maps, review workbooks, reproducible scripts, and documented limitations.",
    },
  ],
  webDelivery: [
    "Production WordPress and Elementor event pages with custom responsive HTML and CSS.",
    "Zoho Creator registration forms, confirmations, and automated email flows.",
    "Production debugging, publishing support, stakeholder review, and maintenance handover.",
  ],
  boundary:
    "This public project summary uses aggregate metrics and general methodology only. It excludes personal information, raw CRM extracts, source workbooks, credentials, exact contact details, proprietary records, and unapproved internal screenshots.",
};
