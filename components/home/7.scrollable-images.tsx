import Image from 'next/image';

export function ScrollableImagesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="flex-none w-72 h-48 relative rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/products/1.png"
                  alt={`Product ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
