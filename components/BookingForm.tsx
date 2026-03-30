"use client";

import { Button } from "./Button";
import { useLanguage } from "./LanguageProvider";

type BookingFormProps = {
  compact?: boolean;
};

export function BookingForm({ compact = false }: BookingFormProps) {
  const { t } = useLanguage();

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className={`rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft ${compact ? "" : "md:p-8"}`}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input className="min-w-0 rounded-xl border border-orange-100 px-4 py-3 text-sm outline-none transition focus:border-orange-400 sm:text-base" placeholder={t.bookingForm.name} />
        <input className="min-w-0 rounded-xl border border-orange-100 px-4 py-3 text-sm outline-none transition focus:border-orange-400 sm:text-base" placeholder={t.bookingForm.email} type="email" />
        <input className="min-w-0 rounded-xl border border-orange-100 px-4 py-3 text-sm outline-none transition focus:border-orange-400 sm:text-base" placeholder={t.bookingForm.phone} type="tel" />
        <input aria-label={t.bookingForm.date} className="min-w-0 rounded-xl border border-orange-100 px-4 py-3 text-sm outline-none transition focus:border-orange-400 sm:text-base" type="date" />
      </div>
      <select className="mt-4 w-full rounded-xl border border-orange-100 px-4 py-3 text-sm outline-none transition focus:border-orange-400 sm:text-base" defaultValue="">
        <option value="" disabled>
          {t.bookingForm.pujaType}
        </option>
        {t.servicesList.map((service) => (
          <option key={service}>{service}</option>
        ))}
      </select>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        {t.bookingForm.submit}
      </Button>
    </form>
  );
}
