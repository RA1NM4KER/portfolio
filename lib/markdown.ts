import {
  additionalProjects,
  capabilities,
  contact,
  currentFocus,
  education,
  experience,
  hero,
  selectedProjects,
} from "@/data/portfolio";
import { schoolscapeProject } from "@/data/schoolscape";
import { fineAppCaseStudy } from "@/data/fineapp";
import { siteUrl } from "@/data/seo";

function document(blocks: (string | undefined)[]) {
  return `${blocks.filter(Boolean).join("\n\n")}\n`;
}

function bullets(items: readonly string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function link(label: string, href: string) {
  return `[${label}](${new URL(href, siteUrl).href})`;
}

export function portfolioMarkdown() {
  return document([
    "# Kefas Manda",
    `Source: ${siteUrl}/`,
    `## ${hero.title}`,
    hero.intro,
    `Location: ${hero.location}`,
    "## Professional experience",
    ...experience.map((item) =>
      document([
        `### ${item.role} at ${item.company}`,
        `${item.period} | ${item.location}`,
        link(item.company, item.website),
        item.summary,
        item.engagement,
        item.metrics &&
          bullets(item.metrics.map((m) => `${m.label}: ${m.value}`)),
        bullets(item.highlights),
        ...(item.areas ?? []).flatMap((area) => [
          `#### ${area.title}`,
          bullets(area.details),
        ]),
        `Technologies: ${item.technologies.join(", ")}`,
        item.caseStudy && link(item.caseStudy.label, item.caseStudy.href),
      ]).trim(),
    ),
    "## Selected projects",
    ...selectedProjects.map((project) =>
      document([
        `### ${project.name}`,
        project.eyebrow,
        project.description,
        project.proof && `${project.proof.value} ${project.proof.label}`,
        project.outcome,
        project.note,
        `Technologies: ${project.technologies.join(", ")}`,
        bullets(project.links.map((item) => link(item.label, item.href))),
        project.image && link(project.image.alt, project.image.src),
        project.video &&
          `${project.video.label}. ${link("Watch demo (MP4)", project.video.src)}`,
        project.diagram &&
          bullets(
            project.diagram.map((layer) =>
              [layer.label, layer.detail].filter(Boolean).join(": "),
            ),
          ),
        project.secondaryProject &&
          document([
            `#### ${project.secondaryProject.name}`,
            project.secondaryProject.description,
            project.secondaryProject.technologies?.join(", "),
          ]).trim(),
        project.hardwareExperiment &&
          document([
            `#### ${project.hardwareExperiment.title}`,
            project.hardwareExperiment.description,
            ...project.hardwareExperiment.architecture.map(
              (state) => `${state.label}: ${state.nodes.join(" → ")}`,
            ),
            link(
              "Watch hardware demo (MP4)",
              project.hardwareExperiment.video.src,
            ),
          ]).trim(),
      ]).trim(),
    ),
    "## More projects",
    ...additionalProjects.map((project) =>
      document([
        `### ${project.name}`,
        project.category,
        project.description,
        link(project.linkLabel, project.href),
      ]).trim(),
    ),
    "## Technical capabilities",
    ...capabilities.map((group) =>
      document([
        `### ${group.title}`,
        group.description,
        bullets(group.items),
      ]).trim(),
    ),
    `## ${currentFocus.title}`,
    currentFocus.introduction,
    ...currentFocus.items.map(
      (item) => `### ${item.title}\n\n${item.description}`,
    ),
    "## Education",
    `${education.qualification}, ${education.institution}`,
    `Focal area: ${education.focalArea}`,
    "## Contact",
    bullets([
      link(contact.email, `mailto:${contact.email}`),
      link("GitHub", contact.github),
      link("LinkedIn", contact.linkedin),
    ]),
  ]);
}

export function schoolscapeMarkdown() {
  const project = schoolscapeProject;
  return document([
    `# ${project.title}`,
    `Source: ${siteUrl}/schoolscape`,
    `Author: ${link("Kefas Manda", "/")}`,
    project.summary,
    `Role: ${project.role}`,
    `Engagement: ${project.engagement}`,
    `Location: ${project.location}`,
    "## Project outcomes",
    bullets(project.metrics.map((m) => `${m.label}: ${m.value}. ${m.detail}`)),
    "## System overview",
    ...project.pipeline.map((step) => `### ${step.title}\n\n${step.detail}`),
    "## Workstreams",
    ...project.workstreams.map((stream) =>
      document([
        `### ${stream.title}`,
        stream.detail,
        `Result: ${stream.result}`,
      ]).trim(),
    ),
    "## Field quality",
    bullets(
      project.fieldOutcomes.map((o) => `${o.field}: ${o.result}. ${o.detail}`),
    ),
    "## Validation principles",
    bullets(project.principles.map((p) => `${p.title}: ${p.detail}`)),
    "## Handover",
    ...project.handover.map((item) => `### ${item.title}\n\n${item.detail}`),
    "## Production web delivery",
    bullets(project.webDelivery),
    "## Public boundary",
    project.boundary,
    link("Back to portfolio", "/"),
  ]);
}

export function fineAppMarkdown() {
  const project = fineAppCaseStudy;
  return document([
    `# ${project.title}`,
    `Source: ${siteUrl}/fineapp`,
    `Author: ${link("Kefas Manda", "/")}`,
    project.summary,
    `Role: ${project.role}`,
    "## Current platform",
    project.currentModel,
    "## At a glance",
    bullets(
      project.metrics.map(
        (metric) => `${metric.label}: ${metric.value}. ${metric.detail}`,
      ),
    ),
    "## Overview",
    ...project.overview,
    link(project.image.alt, project.image.src),
    project.image.caption,
    "## Product evolution",
    "### Earlier version",
    project.evolution.before,
    "### Why it changed",
    project.evolution.reason,
    "### Current approach",
    project.evolution.current,
    "## Original engineering",
    ...project.engineering.map((item) => `### ${item.title}\n\n${item.detail}`),
    "## Architecture",
    project.architecture.summary,
    bullets(project.stack),
    project.architecture.note,
    "## Reflection",
    ...project.reflection,
    link("Visit FineApp", "https://www.fineapp.co.za/creatives"),
    link("Back to portfolio", "/"),
  ]);
}

export function markdownResponse(content: string, canonicalPath: string) {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${new URL(canonicalPath, siteUrl).href}>; rel="canonical", <${siteUrl}/llms.txt>; rel="describedby"`,
    },
  });
}
