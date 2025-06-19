import Image from 'next/image';

export function LocalPresenceSection() {
  return (
    <div className="container mx-auto px-4 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">
          You'll spot us across local communities in <span className="text-[#BC1E2C]">Indonesia</span>!
        </h2>
        <p className="text-gray-600">Our furthest reach on local goes from Sabang to Merauke...</p>
      </div>

      <div className="relative h-[300px] mx-auto max-w-3xl">
        <Image
          src="/images/icons/Map.png"
          alt="Indonesia Map Distribution"
          fill
          className="object-contain"
        />
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-600">...as we marketed it through:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: "users-icon.png", text: "Community Forums & Local Groups" },
          { icon: "globe-icon.png", text: "Social Media Platforms" },
          { icon: "box-icon.png", text: "E-Commerce Marketplaces" },
        ].map(({ icon, text }) => (
          <div
            key={text}
            className="flex flex-col items-center p-6 bg-[#BC1E2C] rounded-xl text-white text-center"
          >
            <div className="w-12 h-12 mb-3">
              <Image
                src={`/images/icons/${icon}`}
                alt={`${text} icon`}
                width={48}
                height={48}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-sm">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
