interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg bg-gloss-white p-6">
      <p className="font-grotesk text-[22px] leading-[1.2] font-medium tracking-[-0.44px] text-gloss-black">
        {title}
      </p>
      <p className="mt-3 font-grotesk text-[16px] leading-[1.5] text-gloss-black/70">{description}</p>
    </div>
  );
}
