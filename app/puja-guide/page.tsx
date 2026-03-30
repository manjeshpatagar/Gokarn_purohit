import type { Metadata } from "next";
import { PujaGuidePageClient } from "./PujaGuidePageClient";

export const metadata: Metadata = {
  title: "Puja Guide | Gokarna Pandit",
  description:
    "Read simple guides for Griha Pravesh, Satyanarayana Pooja, Shraddha, and other rituals by Gokarna Pandit serving Uttara Kannada.",
  alternates: {
    canonical: "/puja-guide",
  },
};

export default function PujaGuidePage() {
  return <PujaGuidePageClient />;
}
