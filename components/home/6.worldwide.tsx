import Image from 'next/image';

export function WorldwideSection() {
  return (
    <section className="bg-[#D9D9D9] py-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">
          Proudly made local, loved <span className="text-[#1C74BC]">worldwide</span>.
        </h2>
        <p className="text-600">With growing international orders, our reach expands!</p>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mt-4">
          {[
            "Malaysia", "India", "Australia", "France", "Mexico", "Italy", "Spain",
            "United States", "United Kingdom", "Ireland", "Denmark", "South Africa", "Germany"
          ].map((country) => (
            <span
              key={country}
              className="bg-[#1C74BC] text-white text-sm px-4 py-1 rounded-full flex items-center gap-2"
            >
              <Image
                src="/images/icons/gps.png"
                alt="Location"
                width={16}
                height={16}
                className="filter brightness-0 invert"
              />
              {country}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
