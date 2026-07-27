import { statsContent } from "@/domain/stats/statsContent";

export function StatsSection() {
  return (
    <section className="bg-gloss-white py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 sm:grid-cols-3">
        {statsContent.map((stat) => (
          <div key={stat.caption}>
            <p className="font-classic text-[56px] leading-[0.95] font-normal tracking-[-0.03em] text-gloss-black sm:text-[72px] lg:text-[96px]">
              {stat.value}
            </p>
            <p className="mt-3 font-grotesk text-[16px] font-medium text-gloss-black">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
