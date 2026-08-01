import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { SchoolscapeProjectPage } from "@/components/sections/schoolscape/schoolscape-project-page";
import { schoolscapeProject } from "@/data/schoolscape";
import { schoolscapeNavLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Schoolscape CRM data engineering",
  description:
    "How Kefas Manda reconciled, validated, and prepared Schoolscape’s 30,000-record education CRM for migration and maintainable handover.",
  alternates: { canonical: "/schoolscape" },
};

export default function SchoolscapePage() {
  return (
    <>
      <Navbar links={schoolscapeNavLinks} />
      <SchoolscapeProjectPage project={schoolscapeProject} />
    </>
  );
}
