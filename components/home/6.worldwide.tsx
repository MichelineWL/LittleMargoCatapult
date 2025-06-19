import Image from 'next/image';

export function WorldwideSection() {
  return (
    <div className="container mx-auto px-4 text-center space-y-4 bg-gray-200 py-8 rounded-2xl">
      <h2 className="text-2xl font-bold">
        Proudly made local, loved <span className="text-[#1C74BC]">worldwide</span>.
      </h2>
      <p className="text-gray-600">With growing international orders, our reach expands!</p>
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mt-4">
        {[
          "Malaysia", "India", "Australia", "France", "Mexico", "Italy", "Spain",
          "United States", "United Kingdom", "Ireland", "Denmark", "South Africa", "Germany"
        ].map((country) => (
          <span
            key={country}
            className="bg-[#1C74BC] text-white text-sm px-4 py-1 rounded-full"
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  );
}
