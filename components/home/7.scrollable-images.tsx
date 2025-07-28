"use client";

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useEffect, useRef, useState } from 'react';

export function ScrollableImagesSection() {
  const [api, setApi] = useState<any>();
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHolding = useRef(false);
  
  const productImages = [
    '/images/products/apollo-gallery/apollo-gallery-01.jpg',
    '/images/products/apollo-gallery/apollo-gallery-02.jpg',
    '/images/products/apollo-gallery/apollo-gallery-03.jpg',
    '/images/products/apollo-gallery/apollo-gallery-04.jpg',
    '/images/products/apollo-gallery/apollo-gallery-05.jpg',
    '/images/products/apollo-gallery/apollo-gallery-06.jpg',
    '/images/products/apollo-gallery/apollo-gallery-07.jpg',
    '/images/products/die-t-gallery/die-t-gallery-01.jpg',
    '/images/products/die-t-gallery/die-t-gallery-02.jpg',
    '/images/products/die-t-gallery/die-t-gallery-03.jpg',
    '/images/products/die-t-gallery/die-t-gallery-04.jpg',
    '/images/products/die-t-gallery/die-t-gallery-05.jpg',
    '/images/products/die-t-gallery/die-t-gallery-06.jpg',
    '/images/products/die-t-gallery/die-t-gallery-07.jpg',
    '/images/products/klassix-gallery/klassix-gallery-01.jpg',
    '/images/products/klassix-gallery/klassix-gallery-02.jpg',
    '/images/products/klassix-gallery/klassix-gallery-03.jpg',
    '/images/products/klassix-gallery/klassix-gallery-04.jpg',
    '/images/products/a-six-gallery/a-six-gallery-01.jpg',
    '/images/products/a-six-gallery/a-six-gallery-02.jpg',
    '/images/products/a-six-gallery/a-six-gallery-03.jpg',
    '/images/products/a-six-gallery/a-six-gallery-04.jpg',
    '/images/products/fedora-gallery/fedora-gallery-01.jpg',
    '/images/products/fedora-gallery/fedora-gallery-02.jpg',
    '/images/products/fedora-gallery/fedora-gallery-03.jpg',
    '/images/products/fedora-gallery/fedora-gallery-04.jpg',
    '/images/products/roo-pouch-gallery/roo-pouch-gallery-01.jpg',
    '/images/products/roo-pouch-gallery/roo-pouch-gallery-02.jpg',
    '/images/products/roo-pouch-gallery/roo-pouch-gallery-03.jpg',
    '/images/products/roo-pouch-gallery/roo-pouch-gallery-04.jpg',
  ];

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!api || !isMounted) return;

    // Static auto-scroll - runs continuously unless user is holding
    intervalRef.current = setInterval(() => {
      if (!isHolding.current) {
        api.scrollNext();
      }
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isMounted]);

  const handleMouseDown = () => {
    isHolding.current = true;
  };

  const handleMouseUp = () => {
    isHolding.current = false;
  };

  const handleTouchStart = () => {
    isHolding.current = true;
  };

  const handleTouchEnd = () => {
    isHolding.current = false;
  };

  return (
    <section className="py-16 bg-white">
      <div className="relative w-full">
        <Carousel 
          setApi={setApi}
          opts={{ loop: true, align: "start", dragFree: true }}
        >
          <CarouselContent 
            className="-ml-4"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {productImages.map((image, i) => (
              <CarouselItem key={i} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="w-full h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Product ${image.split('/').pop()?.split('.')[0] || 'gallery'}`}
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
