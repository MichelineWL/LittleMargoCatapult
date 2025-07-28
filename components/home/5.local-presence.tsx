import Image from 'next/image';

export function LocalPresenceSection() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
          You&apos;ll spot us across local communities in <span className="text-[#BC1E2C]">Indonesia</span>!
        </h2>
        <p className="text-sm md:text-base text-gray-600 px-4">Our furthest reach on local goes from Sabang to Merauke...</p>
      </div>

      <div className="relative h-[200px] md:h-[300px] mx-auto max-w-3xl">
        <Image
          src="/images/icons/map.png"
          alt="Indonesia Map Distribution"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
          className="object-contain"
          priority
        />
      </div>

      <div className="text-center mt-4">
        <p className="text-sm md:text-base text-gray-600">...as we marketed it through:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          { 
            icon: "customers.png", 
            text: "Community Forums & Local Groups",
            alt: "Community Forums"
          },
          { 
            icon: "global-reach.png", 
            text: "Social Media Platforms",
            alt: "Social Media"
          },
          { 
            icon: "packages.png", 
            text: "E-Commerce Marketplaces",
            alt: "E-Commerce"
          },
        ].map(({ icon, text, alt }) => (
          <div
            key={text}
            className="flex flex-col items-center px-4 md:px-6 lg:px-8 py-4 md:py-6 bg-[#BC1E2C] rounded-xl text-white text-center min-h-[120px] md:min-h-[140px]"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 flex items-center justify-center">
              <Image
                src={icon.endsWith('.svg') ? `/images/icons/sosmed/${icon}` : `/images/icons/stats/${icon}`}
                alt={alt}
                width={48}
                height={48}
                className="brightness-0 invert w-full h-full object-contain"
              />
            </div>
            <p className="text-xs md:text-sm leading-tight">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
