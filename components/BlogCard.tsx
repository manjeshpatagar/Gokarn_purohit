type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  eyebrow?: string;
  imagePosition?: string;
};

export function BlogCard({
  image,
  title,
  description,
  eyebrow = "Puja Guide",
  imagePosition = "center",
}: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-amber-100/80 bg-white shadow-[0_24px_60px_rgba(120,53,15,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(120,53,15,0.18)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
        <div className="absolute left-5 top-5">
          <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber-50 backdrop-blur-sm">
            {eyebrow}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="max-w-sm text-2xl font-bold leading-tight text-white [text-shadow:0_10px_24px_rgba(0,0,0,0.45)]">
            {title}
          </h3>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-orange-50/55 p-6">
        <p className="text-sm leading-7 text-stone-600">{description}</p>
        <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
          <span className="h-px w-10 bg-orange-300" />
          Ritual Guide
        </div>
      </div>
    </article>
  );
}
