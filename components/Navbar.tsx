
"use client";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
  <Container className="flex sm:min-h-[95px] items-center py-2 px-4">
       <Link
  href="/"
  className="flex min-w-0 flex-1 items-center gap-3 xl:w-[330px] xl:flex-none xl:shrink-0"
>
         <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14 xl:h-16 xl:w-16">
  <Image
    src="/images/kaivalya-logo.jpeg"
    alt="Kaivalya Mukti Shetra Shetra Gokarna"
    fill
    className="object-cover"
    priority
  />
</div>
          <div className="min-w-0">
            <p className="text-sm font-bold leading-tight text-stone-900 sm:text-lg">
              {t.brand.title}
            </p>
          <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500 sm:text-xs sm:tracking-[0.2em]">
              {t.brand.subtitle}
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {t.navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-2 py-2 text-sm font-medium transition ${
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

       <div className="hidden w-[225px] shrink-0 items-center justify-end gap-3 xl:flex">
          <div className="flex rounded-full border border-orange-200 bg-orange-50 p-1">
            <button
              type="button"
              onClick={() => setLang("kn")}
              className={`rounded-full px-2 py-1 text-[10px] font-semibold transition ${lang === "kn" ? "bg-orange-600 text-white" : "text-orange-700"}`}
            >
              ಕನ್ನಡ
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-1 text-[10px] font-semibold transition ${lang === "en" ? "bg-orange-600 text-white" : "text-orange-700"}`}
            >
              EN
            </button>
          </div>
          <Button href="/contact" className="whitespace-nowrap px-5 py-3 text-sm">
          {t.common.connect}</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-200 text-stone-700 xl:hidden"
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
        <div className="border-t border-orange-100 bg-white xl:hidden">
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
            <Button href="/contact" className="mt-4 w-full py-2 text-xs" variant="primary">
              {t.common.connect}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
