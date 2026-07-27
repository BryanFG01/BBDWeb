import mascotOwl from "@/assets/LogoAnimado-removebg-preview.png";

export function ProjectsMascot() {
  return (
    <div className="pointer-events-none absolute top-4 right-0 hidden h-[26rem] w-[26rem] items-end justify-center lg:flex">
      <img src={mascotOwl} alt="" aria-hidden="true" className="h-full w-auto object-contain" />
    </div>
  );
}
