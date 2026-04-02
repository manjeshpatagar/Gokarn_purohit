import type { Metadata } from "next";
import { PoojaPackejesPageClient } from "./PoojaPackejesPageClient";

export const metadata: Metadata = {
  title: "Pooja Packejes | Gokarna Pandit",
  description:
    "Explore pooja packejes for Pitra Pooja, Tripindi Shradda, Moksha Narayana Bali, and Nagabali Pooja in Gokarna.",
  alternates: {
    canonical: "/pooja-packejes",
  },
};

export default function PoojaPackejesPage() {
  return <PoojaPackejesPageClient />;
}
