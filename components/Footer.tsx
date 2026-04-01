"use client";

import { Container } from "./Container";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-950 py-16 pb-28 text-stone-300 md:pb-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{t.brand.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-400">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">{t.footer.contactHeading}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>{t.contactDetails.name}</li>
              <li>
                <a href={`tel:${t.contactDetails.phone}`} className="inline-flex items-center gap-2 transition hover:text-white">
                  <span>📞</span>
                  {t.contactDetails.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${t.contactDetails.email}`} className="transition hover:text-white">
                  {t.contactDetails.email}
                </a>
              </li>
              <li>{t.contactDetails.address}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">{t.footer.areasHeading}</h4>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {t.areas.slice(0, 8).map((area) => (
                <span key={area} className="rounded-full bg-stone-900 px-3 py-2 text-stone-300">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">{t.footer.socialHeading}</h4>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-stone-900 px-4 py-2">Facebook</span>
              <span className="rounded-full bg-stone-900 px-4 py-2">Google</span>
              <span className="rounded-full bg-stone-900 px-4 py-2">WhatsApp</span>
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-stone-800 bg-stone-900 p-4">
              <div className="flex h-40 items-center justify-center rounded-[1rem] border border-dashed border-stone-700 text-sm text-stone-500">
                {t.common.mapPlaceholder}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-stone-800 pt-6 text-sm text-stone-500">
          {t.footer.copyright}
        </div>
      </Container>
    </footer>
  );
}
