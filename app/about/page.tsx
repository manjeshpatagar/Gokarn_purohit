import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Gokarna Pandit | Experienced Kannada Purohit",
  description:
    "Gokarna Pandit is an experienced Kannada purohit serving Uttara Kannada with traditional rituals and authentic practices.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
