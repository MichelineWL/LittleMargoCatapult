import Image from 'next/image';

export function ScrollableImagesSection() {
  const productImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {productImages.map((image, i) => (
            <div
              key={i}
              className="flex-none w-96 h-64 relative rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/products/${image}`}
                alt={`Product ${image.split('.')[0]}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
