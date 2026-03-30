"use client";

import { useState } from "react";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./LanguageProvider";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <Container className="max-w-4xl">
        <SectionTitle
          eyebrow={t.common.faq}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
          align="center"
        />
        <div className="mt-10 space-y-4">
          {t.faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="rounded-2xl border border-orange-100 bg-white shadow-md">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-stone-900">{faq.question}</span>
                  <span className="text-2xl text-orange-600">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen ? (
                  <div className="border-t border-orange-100 px-6 py-5 text-sm leading-7 text-stone-600">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
