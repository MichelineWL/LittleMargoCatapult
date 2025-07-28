import Image from 'next/image';

export function MaterialsSection() {
  return (
    <div className="container mx-auto px-4 space-y-6 md:space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold flex flex-col sm:inline-flex sm:flex-row items-center gap-1 sm:gap-2">
          <span className="text-[#BC1E2C]">Thoughtfully</span> sourced,{" "}
          <span className="text-[#1C74BC]">Sustainably</span> made.
        </h2>
        <p className="text-sm md:text-base text-gray-600 px-4">We carefully picked our materials history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        {[
          { image: "a-six-gallery-02.jpg", material: "Recycled skateboard deck" },
          { image: "a-six-gallery-02.jpg", material: "Repurposed water gallon cap" },
          { image: "a-six-gallery-02.jpg", material: "Sustainably sourced wood" },
          { image: "a-six-gallery-02.jpg", material: "Upcycled fabric" },
        ].map(({ image, material }) => (
          <div
            key={material}
            className="relative flex items-center justify-center md:justify-start"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0 bg-white/20 rounded-full overflow-hidden border-3 md:border-4 border-[#BC1E2C] z-10">
              <Image
                src={`/images/products/a-six-gallery/${image}`}
                alt={material}
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-[#BC1E2C] to-[#a01824] text-white rounded-full py-3 md:py-4 pl-10 md:pl-14 pr-6 md:pr-8 -ml-8 md:-ml-10 min-h-[48px] md:min-h-[60px] flex items-center w-56 md:w-64">
              <span className="text-xs md:text-sm font-bold leading-tight">{material}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
