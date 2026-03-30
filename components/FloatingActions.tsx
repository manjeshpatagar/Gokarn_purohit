"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.15 1.59 5.95L0 24l6.31-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.57 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.16-3.49-8.41ZM12.08 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.75.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.23c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.98 2.89a9.82 9.82 0 0 1 2.9 7c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.4c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.66.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.49a8.98 8.98 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.91-2.2-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.27-.2-.56-.35Z" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
    </svg>
  );
}

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();
  const phoneNumber = t.contactDetails.phone.replace(/[^\d]/g, "");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-4 bottom-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={`https://wa.me/${phoneNumber}`}
          className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-4 text-sm font-semibold text-white shadow-soft"
          aria-label={t.floating.whatsappAria}
        >
          <WhatsAppIcon />
          <span>{t.floating.whatsapp}</span>
        </a>
        <a
          href={`tel:${t.contactDetails.phone}`}
          className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-4 py-4 text-sm font-semibold text-white shadow-soft"
          aria-label={t.floating.callAria}
        >
          <CallIcon />
          <span>{t.floating.call}</span>
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={`https://wa.me/${phoneNumber}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-lg text-white shadow-soft transition hover:-translate-y-1"
          aria-label={t.floating.whatsappAria}
        >
          <WhatsAppIcon />
        </a>
        <a
          href={`tel:${t.contactDetails.phone}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-lg text-white shadow-soft transition hover:-translate-y-1"
          aria-label={t.floating.callAria}
        >
          <CallIcon />
        </a>
        {showScrollTop ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white shadow-soft transition hover:-translate-y-1"
            aria-label={t.floating.topAria}
          >
            {t.floating.top}
          </button>
        ) : null}
      </div>
    </>
  );
}
