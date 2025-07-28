import Image from "next/image";

const STATS = [
  {
    icon: "/images/icons/stats/packages.png",
    number: "1000+",
    label: "Products Sold",
    sublabel: "2020 - 2024",
  },
  {
    icon: "/images/icons/stats/global-reach.png",
    number: "15+",
    label: "Countries Reached",
    sublabel: "Global Market",
  },
  {
    icon: "/images/icons/stats/customers.png",
    number: "500+",
    label: "Community Members",
    sublabel: "Active Users",
  },
  {
    icon: "/images/icons/stats/revenue.png",
    number: "IDR 250K - 6 Mio",
    label: "Price Ranges",
    sublabel: "Custom & Ready Stock",
  },
] as const;

export function StatsSection() {
  return (
    <section className="bg-[#D9D9D9] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          We&apos;ve shoots these numbers.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1C74BC] rounded-2xl p-4 md:p-6 text-white text-center"
            >
              <Image
                src={stat.icon}
                alt={stat.label}
                width={40}
                height={40}
                className="mx-auto mb-3 md:mb-4 w-8 h-8 md:w-10 md:h-10"
              />
              <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">{stat.number}</h3>
              <p className="font-medium mb-1 text-sm md:text-base">{stat.label}</p>
              <p className="text-xs md:text-sm text-white/80">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
