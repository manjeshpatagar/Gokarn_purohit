type BlogCardProps = {
  image: string;
  title: string;
  description: string;
};

export function BlogCard({ image, title, description }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <img src={image} alt={title} className="aspect-[3/2] h-56 w-full rounded-xl object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
      </div>
    </article>
  );
}
