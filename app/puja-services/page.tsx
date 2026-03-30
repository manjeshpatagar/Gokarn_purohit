import type { Metadata } from "next";
import { PujaServicesPageClient } from "./PujaServicesPageClient";

export const metadata: Metadata = {
  title: "All Pooja Services in Uttara Kannada | Kannada Purohit",
  description:
    "We provide Griha Pravesh, Vastu Pooja, Satyanarayana Pooja, Marriage rituals, Shraddha and all Hindu rituals across Uttara Kannada district.",
  alternates: {
    canonical: "/puja-services",
  },
};

export default function PujaServicesPage() {
  return <PujaServicesPageClient />;
}
