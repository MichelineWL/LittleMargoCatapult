import Image from "next/image";

const STATS = [
  {
    icon: "/images/icons/stats/box.png",
    number: "1000+",
    label: "Products Sold",
    sublabel: "2020 - 2024",
  },
  {
    icon: "/images/icons/stats/globe.png",
    number: "15+",
    label: "Countries Reached",
    sublabel: "Global Market",
  },
  {
    icon: "/images/icons/stats/users.png",
    number: "500+",
    label: "Community Members",
    sublabel: "Active Users",
  },
  {
    icon: "/images/icons/stats/dollar.png",
    number: "IDR 250K - 6 Mio",
    label: "Price Ranges",
    sublabel: "Custom & Ready Stock",
  },
] as const;

export function StatsSection() {
  return (
    <section className="bg-[#D9D9D9] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          We&apos;ve shoots these numbers.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1C74BC] rounded-2xl p-6 text-white text-center"
            >
              <Image
                src={stat.icon}
                alt={stat.label}
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-white/80">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
