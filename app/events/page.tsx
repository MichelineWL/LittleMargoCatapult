"use client"
import React from 'react';
import { Card } from '@/components/events/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { newsItems } from "@/content/events/news";

export default function EventsPage() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  )

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="font-bold text-4xl my-15">We're more than <span className="text-[#1C74BC]">just</span> <span className="text-[#BC1E2C]">selling products</span></h1>

      {/* News Section */}
      <section className="mt-4 text-center bg-[#D9D9D9] w-full p-10">
        <p className="text-lg">We've been spotlighted by national and local media — because our work sparks stories worth sharing</p>
        <div className="mx-auto flex justify-center mt-8 items-center relative w-[85%] max-w-6xl">
          <Carousel 
            className="w-full" 
            opts={{
              loop: true,
              align: "start",
              slidesToScroll: 1,
            }}
            plugins={[plugin.current]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {newsItems.map((card, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                  <div className="w-full">
                    <Card
                      title={card.title}
                      description={card.description}
                      imageUrl={card.imageUrl}
                      link={card.link}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <CarouselPrevious className="pointer-events-auto left-[-20px] sm:left-[-40px]" />
              <CarouselNext className="pointer-events-auto right-[-20px] sm:right-[-40px]" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}