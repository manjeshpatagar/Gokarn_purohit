import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Gokarna Pandit | Book Pooja in Uttara Kannada",
  description:
    "Contact Gokarna Pandit to book pooja services in Uttara Kannada. Call or WhatsApp for quick booking.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
