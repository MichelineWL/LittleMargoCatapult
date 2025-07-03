import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export function ApolloSeriesSection() {
  const carouselProducts = [
    { id: 'IDR XXXX', image: '/images/products/1.jpg' },
    { id: 'IDR XXXX', image: '/images/products/2.jpg' },
    { id: 'IDR XXXX', image: '/images/products/3.jpg' },
    { id: 'IDR XXXX', image: '/images/products/4.jpg' },
    { id: 'IDR XXXX', image: '/images/products/5.jpg' },
    { id: 'IDR XXXX', image: '/images/products/6.jpg' },
    { id: 'IDR XXXX', image: '/images/products/7.jpg' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Take a closer look at our catapult designs.
        </h2>
        <div className="bg-[#1C74BC] rounded-2xl p-8 flex flex-col gap-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Image grid layout tanpa border */}
            <div className="md:col-span-2 grid grid-cols-3 grid-rows-2 gap-3 h-fit">
              {/* Row 1: 1 large image pada 2 kolom + 1 vertical image */}
              <div className="col-span-2 aspect-[2/1] rounded-xl overflow-hidden">
                <Image
                  src="/images/products/apollo.png"
                  alt="Apollo Product"
                  width={280}
                  height={140}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="row-span-2 rounded-xl overflow-hidden">
                <Image
                  src="/images/products/apollo.png"
                  alt="Apollo Product"
                  width={140}
                  height={280}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Row 2: 2 square images */}
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/products/apollo.png"
                  alt="Apollo Product"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/products/apollo.png"
                  alt="Apollo Product"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Text content */}
            <div className="flex flex-col gap-6 text-black">
              <span className="inline-block bg-white text-black font-bold px-6 py-2 rounded-full w-fit text-lg">
                Apollo Series
              </span>
              <h3 className="font-bold text-white text-2xl italic leading-tight">
                Designed for athletes, built for precision.
              </h3>
              <p className="text-xl text-white leading-relaxed">
                Crafted to meet athletes&apos; needs, this slingshot offers handling that aligns perfectly with grip position. Available in two design variations and made from premium materials.
              </p>
            </div>
          </div>
          
          {/* Ready to buy button */}
          <div className="flex justify-center">
            <span className="bg-white px-8 py-2 rounded-full font-bold text-black text-xl">
              Ready-to-buy{' '}
              <span className="text-[#BC1E2C]">Apollo Series!</span>
            </span>
          </div>

          {/* Carousel - dengan looping */}
          <div className="relative px-12">
            <Carousel opts={{ loop: true }}>
              <CarouselContent className="-ml-4">
                {carouselProducts.map((product, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/3">
                    <div className="bg-white rounded-xl p-6 flex flex-col">
                      <div className="aspect-square w-full relative rounded-xl overflow-hidden mb-4">
                        <Image
                          src={product.image}
                          alt={`Product ${index + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="text-left">
                        <span className="bg-[#1C74BC] text-white px-8 py-2 rounded-full font-bold text-base">
                          {product.id}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-gray-600 hover:bg-gray-700 text-white" />
              <CarouselNext className="right-0 bg-gray-600 hover:bg-gray-700 text-white" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
