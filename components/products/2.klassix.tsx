import Image from 'next/image';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export function KlassixSeriesSection() {
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
        <div className="bg-[#BC1E2C] rounded-2xl p-8 flex flex-col gap-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Image grid layout tanpa border */}
            <div className="md:col-span-2 grid grid-cols-3 grid-rows-2 gap-3 h-fit">
              {/* Row 1: 1 large image pada 2 kolom + 1 vertical image */}
              <div className="col-span-2 aspect-[2/1] rounded-xl overflow-hidden">
                <Image
                  src="/images/products/klassix.png"
                  alt="Klassix Product"
                  width={280}
                  height={140}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="row-span-2 rounded-xl overflow-hidden">
                <Image
                  src="/images/products/die-t.png"
                  alt="Die-T Product"
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
                  src="/images/products/a-six.png"
                  alt="A-Six Product"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/products/fedora.png"
                  alt="Fedora Product"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div> */}
            </div>
            
            {/* Text content */}
            <div className="flex flex-col gap-6 text-white">
              <span className="inline-block bg-white text-black font-bold px-6 py-2 rounded-full w-fit text-lg">
                Klassix Series
              </span>
              <h3 className="font-bold text-2xl italic leading-tight">
                A classic Y-shape design with a signature twist.
              </h3>
              <p className="text-xl leading-relaxed">
                This slingshot frame mimics the familiar Y form, enhanced with a
                distinct beehive-tail curve at the base for better grip without
                compromising comfort. Available in three variants: OTT, TTF, and
                PFS—designed to suit different shooting styles.
              </p>
            </div>
          </div>
          
          {/* Ready to buy button */}
          <div className="flex justify-center">
            <span className="bg-white px-8 py-2 rounded-full font-bold text-black text-xl">
              Ready-to-buy{' '}
              <span className="text-[#BC1E2C]">Klassix Series!</span>
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
                        <span className="bg-[#BC1E2C] text-white px-8 py-2 rounded-full font-bold text-base">
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