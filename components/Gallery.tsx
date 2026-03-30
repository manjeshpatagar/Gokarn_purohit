"use client";

import { galleryImages } from "@/lib/data";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16">
      <Container>
        <SectionTitle
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-[1.75rem] shadow-md">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="aspect-square h-full w-full rounded-xl object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
