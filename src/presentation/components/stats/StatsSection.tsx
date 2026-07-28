import { statsContent } from "@/domain/stats/statsContent";

export function StatsSection() {
  return (
    <section className="bg-obsidian py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 sm:grid-cols-3">
        {statsContent.map((stat) => (
          <div key={stat.caption} className="text-center sm:text-left">
            <p className="font-savee text-[44px] leading-[1] font-medium tracking-[-0.02em] text-paper sm:text-[60px]">
              {stat.value}
            </p>
            <p className="mt-3 font-savee text-[16px] font-normal text-pearl">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
