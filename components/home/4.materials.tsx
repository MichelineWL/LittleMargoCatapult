import Image from 'next/image';

export function MaterialsSection() {
  return (
    <div className="container mx-auto px-4 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold inline-flex items-center gap-2">
          <span className="text-[#BC1E2C]">Thoughtfully</span> sourced,{" "}
          <span className="text-[#1C74BC]">Sustainably</span> made.
        </h2>
        <p className="text-gray-600">We carefully picked our materials history</p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { image: "1.JPG", material: "Recycled skateboard deck" },
          { image: "2.JPG", material: "Repurposed water gallon cap" },
          { image: "3.JPG", material: "Sustainably sourced wood" },
          { image: "4.JPG", material: "Upcycled fabric" },
        ].map(({ image, material }) => (
          <div
            key={material}
            className="relative flex items-center"
          >
            <div className="w-20 h-20 relative flex-shrink-0 bg-white/20 rounded-full overflow-hidden border-4 border-[#BC1E2C] z-10">
              <Image
                src={`/images/products/${image}`}
                alt={material}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-[#BC1E2C] to-[#a01824] text-white rounded-full py-4 pl-14 pr-8 -ml-10 min-h-[60px] flex items-center w-64">
              <span className="text-sm font-bold">{material}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
