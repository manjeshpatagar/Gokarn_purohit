type ReviewCardProps = {
  name: string;
  rating: number;
  text: string;
  location?: string;
  service?: string;
};

export function ReviewCard({ name, rating, text, location, service }: ReviewCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group rounded-[2rem] border border-amber-100/80 bg-white p-6 shadow-[0_18px_50px_rgba(120,53,15,0.1)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_65px_rgba(120,53,15,0.16)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300 text-base font-bold text-white shadow-[0_10px_24px_rgba(120,53,15,0.28)]">
            {initials}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">{name}</h3>
            {location ? <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-600">{location}</p> : null}
          </div>
        </div>
        <div className="rounded-full bg-orange-50 px-3 py-2 text-orange-500 shadow-inner">
          {Array.from({ length: rating }, () => "★").join("")}
        </div>
      </div>
      {service ? (
        <div className="mt-5 inline-flex rounded-full border border-orange-100 bg-amber-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-orange-700">
          {service}
        </div>
      ) : null}
      <p className="mt-5 text-sm leading-7 text-stone-600">{text}</p>
    </article>
  );
}
