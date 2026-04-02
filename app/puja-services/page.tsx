import type { Metadata } from "next";
import { PujaServicesPageClient } from "./PujaServicesPageClient";

export const metadata: Metadata = {
  title: "All Pooja Services in Gokarna | Kannada Purohit",
  description:
    "We provide Griha Pravesh, Vastu Pooja, Satyanarayana Pooja, marriage rituals, Shraddha, and other Hindu rituals in Gokarna with traditional guidance and care.",
  alternates: {
    canonical: "/puja-services",
  },
};

export default function PujaServicesPage() {
  return <PujaServicesPageClient />;
}
