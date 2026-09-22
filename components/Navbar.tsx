"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-base font-bold text-orange-700 sm:h-12 sm:w-12 sm:text-lg">
            Om
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-bold text-stone-900 sm:text-lg">{t.brand.title}</p>
            <p className="truncate text-[10px] uppercase tracking-[0.2em] text-stone-500 sm:text-xs sm:tracking-[0.24em]">
              {t.brand.subtitle}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {t.navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-orange-100 text-orange-700"
                    : "text-stone-700 hover:bg-orange-50 hover:text-orange-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-orange-200 bg-orange-50 p-1">
            <button
              type="button"
              onClick={() => setLang("kn")}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition ${lang === "kn" ? "bg-orange-600 text-white" : "text-orange-700"}`}
            >
              ಕನ್ನಡ
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition ${lang === "en" ? "bg-orange-600 text-white" : "text-orange-700"}`}
            >
              EN
            </button>
          </div>
          <Button href="/contact">{t.common.connect}</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-200 text-stone-700 lg:hidden"
          aria-label={lang === "kn" ? "ಮೆನು ತೆರೆಯಿರಿ" : "Toggle menu"}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-orange-100 bg-white lg:hidden">
          <Container className="flex max-h-[70vh] flex-col overflow-y-auto py-4">
            <div className="mb-4 flex rounded-full border border-orange-200 bg-orange-50 p-1">
              <button
                type="button"
                onClick={() => setLang("kn")}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition ${lang === "kn" ? "bg-orange-600 text-white" : "text-orange-700"}`}
              >
                ಕನ್ನಡ
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition ${lang === "en" ? "bg-orange-600 text-white" : "text-orange-700"}`}
              >
                EN
              </button>
            </div>
            {t.navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-orange-100 text-orange-700"
                      : "text-stone-700 hover:bg-orange-50 hover:text-orange-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" className="mt-4 w-full" variant="primary">
              {t.common.connect}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
