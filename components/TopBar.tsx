"use client";

import { Container } from "./Container";
import { useLanguage } from "./LanguageProvider";

export function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="border-b border-orange-100 bg-orange-600 text-white">
      <Container className="flex flex-col items-center justify-between gap-2 py-3 text-sm sm:flex-row">
        <p className="font-medium">{t.brand.topBar}</p>
        <div className="flex flex-wrap items-center gap-4 text-orange-50">
          <a href={`tel:${t.contactDetails.phone}`} className="transition hover:text-white">
            {t.contactDetails.phone}
          </a>
          <a href={`mailto:${t.contactDetails.email}`} className="transition hover:text-white">
            {t.contactDetails.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
