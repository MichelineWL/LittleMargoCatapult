import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

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
      <div className="relative w-full">
        <Carousel opts={{ loop: true, align: "start", dragFree: true }}>
          <CarouselContent className="-ml-4">
            {productImages.map((image, i) => (
              <CarouselItem key={i} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="w-full h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src={`/images/products/${image}`}
                    alt={`Product ${image.split('.')[0]}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
