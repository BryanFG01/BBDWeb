interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl bg-charcoal p-6">
      <p className="font-savee text-[21px] leading-[1.33] font-medium text-paper">{title}</p>
      <p className="mt-3 font-savee text-[16px] leading-[1.5] font-normal text-pearl">{description}</p>
    </div>
  );
}
