type ReviewCardProps = {
  name: string;
  rating: number;
  text: string;
};

export function ReviewCard({ name, rating, text }: ReviewCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-orange-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-stone-900">{name}</h3>
        <p className="text-orange-500">{Array.from({ length: rating }, () => "★").join("")}</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-stone-600">{text}</p>
    </article>
  );
}
