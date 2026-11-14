import { markdownResponse, schoolscapeMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(schoolscapeMarkdown(), "/schoolscape");
}
