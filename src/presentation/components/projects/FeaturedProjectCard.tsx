interface FeaturedProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export function FeaturedProjectCard({ title, description, tags }: FeaturedProjectCardProps) {
  return (
    <div className="rounded-2xl bg-gloss-black p-8 lg:p-12">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border-[1.5px] border-pure-white/25 px-3 py-1 font-grotesk text-[14px] font-medium text-gloss-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-classic mt-6 max-w-xl text-[32px] leading-[1.1] font-normal tracking-[-0.03em] text-pure-white lg:text-[40px]">
        {title}
      </h3>
      <p className="mt-4 max-w-lg font-grotesk text-[16px] leading-[1.5] text-gloss-white/70">{description}</p>
    </div>
  );
}
