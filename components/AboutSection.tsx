"use client";

import { Button } from "./Button";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

type AboutSectionProps = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  buttonLabel?: string;
  buttonHref?: string;
};

export function AboutSection({
  title,
  subtitle,
  body,
  image,
  imageAlt,
  reverse = false,
  buttonLabel,
  buttonHref,
}: AboutSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/3] h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="min-w-0">
            <SectionTitle eyebrow={t.common.about} title={title} subtitle={subtitle} />
            <p className="mt-6 text-base leading-8 text-stone-600">{body}</p>
            {buttonLabel && buttonHref ? (
              <Button href={buttonHref} className="mt-8">
                {buttonLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
