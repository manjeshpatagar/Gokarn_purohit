import type { Metadata } from "next";
import { ReviewsPageClient } from "./ReviewsPageClient";

export const metadata: Metadata = {
  title: "Customer Reviews | Gokarna Pandit",
  description:
    "Read customer reviews for Kannada purohit services by Gokarna Pandit across Uttara Kannada.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
