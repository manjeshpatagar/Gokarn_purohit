import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Purohit in Uttara Kannada | Gokarna Pandit",
  description:
    "Looking for a Kannada purohit in Uttara Kannada? Gokarna Pandit offers all types of pooja services like Griha Pravesh, Satyanarayana, Marriage, Shraddha in Bhatkal, Sirsi, Kumta, Karwar and nearby areas.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
