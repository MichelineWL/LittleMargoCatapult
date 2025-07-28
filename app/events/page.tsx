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
import Gallery from '@/components/events/gallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CalendarCard, 
  getAllCalendarEvents, 
  getCalendarEventsByCategory 
} from '@/components/events/calendar';
import dynamic from 'next/dynamic';
const CustomizationSection = dynamic(() => import('@/components/products/5.customization').then(mod => mod.CustomizationSection), { ssr: true });

export default function EventsPage() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  // Get calendar events
  const allEvents = getAllCalendarEvents();
  const competitionEvents = getCalendarEventsByCategory('competition');
  const gatheringEvents = getCalendarEventsByCategory('gathering');


  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl my-8 md:my-12 lg:my-15 px-4 text-center leading-tight">
          We&apos;re more than <span className="text-[#1C74BC]">just</span> <span className="text-[#BC1E2C]">selling products</span>
        </h1>

      {/* News Section */}
      <section className="mt-4 text-center bg-[#D9D9D9] w-full p-4 md:p-6 lg:p-10">
        <p className="text-sm md:text-base lg:text-lg px-2">We&apos;ve been spotlighted by national and local media — because our work sparks stories worth sharing</p>
        <div className="mx-auto flex justify-center mt-6 md:mt-8 items-center relative w-[95%] md:w-[90%] lg:w-[85%] max-w-6xl">
          <Carousel 
            className="w-full" 
            opts={{
              loop: true,
              align: "start",
              slidesToScroll: 1,
            }}
            plugins={[plugin.current]}
          >
            <CarouselContent className="-ml-1 md:-ml-2 lg:-ml-4">
              {newsItems.map((card, index) => (
                <CarouselItem key={index} className="pl-1 md:pl-2 lg:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
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
              <CarouselPrevious className="pointer-events-auto left-[-15px] sm:left-[-25px] lg:left-[-40px] h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="pointer-events-auto right-[-15px] sm:right-[-25px] lg:right-[-40px] h-8 w-8 md:h-10 md:w-10" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className='mt-4 text-center w-full p-4 md:p-6 lg:p-10'>
        <Gallery />
      </section>

      <section className="mt-4 text-center w-full p-4 md:p-6 lg:p-10">
        <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6 px-2">Now, mark your <span className='text-[#1C74BC]'>calendar.</span></h1>
        <p className="text-sm md:text-base lg:text-lg px-2">From slingshot leagues to DIY workshops — we bring people together through exciting community-driven events.</p>
        <Tabs defaultValue="all" className="mt-6 md:mt-8 lg:mt-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 md:mb-8 gap-1 md:gap-0">
            <TabsTrigger value="all" className="text-xs md:text-sm">All</TabsTrigger>
            <TabsTrigger value="competition" className="text-xs md:text-sm">Competition</TabsTrigger>
            <TabsTrigger value="workshop" className="text-xs md:text-sm">Workshop</TabsTrigger>
            <TabsTrigger value="gathering" className="text-xs md:text-sm">Gathering</TabsTrigger>
          </TabsList>
          
          {/* All Events Tab */}
          <TabsContent value="all" className="space-y-4 md:space-y-6 px-2">
            {allEvents.length > 0 ? (
              allEvents.map((event, index) => (
                <CalendarCard
                  key={`${event.id}-${event.title}`}
                  id={event.id}
                  title={event.title}
                  location={event.location}
                  date={event.date}
                  imageUrl={event.imageUrl}
                  category={event.category}
                  index={index} // Pass the map index
                />
              ))
            ) : (
              <p className="text-center text-gray-500 text-sm md:text-base">No events scheduled</p>
            )}
          </TabsContent>
          
          {/* Competition Events Tab */}
          <TabsContent value="competition" className="space-y-4 md:space-y-6 px-2">
            {competitionEvents.length > 0 ? (
              competitionEvents.map((event, index) => (
                <CalendarCard
                  key={`${event.id}-${event.title}`}
                  id={event.id}
                  title={event.title}
                  location={event.location}
                  date={event.date}
                  imageUrl={event.imageUrl}
                  category={event.category}
                  index={index} // Pass the map index
                />
              ))
            ) : (
              <p className="text-center text-gray-500 text-sm md:text-base">No competition events scheduled</p>
            )}
          </TabsContent>
          
          {/* Workshop Events Tab */}
          <TabsContent value="workshop" className="space-y-4 md:space-y-6 px-2">
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Workshop Events</h3>
              <p className="text-gray-500 text-lg">Coming Soon!</p>
              <p className="text-gray-400 text-sm mt-2">Exciting workshop events are being planned. Stay tuned for updates!</p>
            </div>
          </TabsContent>
          
          {/* Gathering Events Tab */}
          <TabsContent value="gathering" className="space-y-4 md:space-y-6 px-2">
            {gatheringEvents.length > 0 ? (
              gatheringEvents.map((event) => (
                <CalendarCard
                  key={`${event.id}-${event.title}`}
                  id={event.id}
                  title={event.title}
                  location={event.location}
                  date={event.date}
                  imageUrl={event.imageUrl}
                  category={event.category}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 text-sm md:text-base">No gathering events scheduled</p>
            )}
          </TabsContent>
        </Tabs>
      </section>
      </div>

      <CustomizationSection />
    </>
  );
}