"use client"
import React, { useState } from 'react';
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
  const workshopEvents = getCalendarEventsByCategory('workshop');
  const gatheringEvents = getCalendarEventsByCategory('gathering');


  return (
    <div className="flex flex-col items-center min-h-screen">
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

      <section className='mt-4 text-center w-full p-10'>
        <Gallery />
      </section>

      <section className="mt-4 text-center w-full p-10">
        <h1 className="font-bold text-3xl mb-6">Now, mark your <span className='text-[#1C74BC]'>calendar.</span></h1>
        <p className="text-lg">From slingshot leagues to DIY workshops — we bring people together through exciting community-driven events.</p>
        <Tabs defaultValue="all" className="mt-10">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="competition">Competition</TabsTrigger>
            <TabsTrigger value="workshop">Workshop</TabsTrigger>
            <TabsTrigger value="gathering">Gathering</TabsTrigger>
          </TabsList>
          
          {/* All Events Tab */}
          <TabsContent value="all" className="space-y-6">
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
              <p className="text-center text-gray-500">No events scheduled</p>
            )}
          </TabsContent>
          
          {/* Competition Events Tab */}
          <TabsContent value="competition" className="space-y-6">
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
              <p className="text-center text-gray-500">No competition events scheduled</p>
            )}
          </TabsContent>
          
          {/* Workshop Events Tab */}
          <TabsContent value="workshop" className="space-y-6">
            {workshopEvents.length > 0 ? (
              workshopEvents.map((event) => (
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
              <p className="text-center text-gray-500">No workshop events scheduled</p>
            )}
          </TabsContent>
          
          {/* Gathering Events Tab */}
          <TabsContent value="gathering" className="space-y-6">
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
              <p className="text-center text-gray-500">No gathering events scheduled</p>
            )}
          </TabsContent>
        </Tabs>
      </section>

      <CustomizationSection />
    </div>
  );
}