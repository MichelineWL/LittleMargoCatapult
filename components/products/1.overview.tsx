import { ProductCard } from '@/components/ui/product-card';

const pouchDescription = `Our bullet pouches are crafted from authentic kangaroo leather—soft yet incredibly durable.

Thoughtfully designed for shooting comfort, they bring a distinct feel and flexibility, making them one of Little Margo Catapults’ signature products.
`;

const frameDescription = `Each frame is engineered with ergonomic shapes that maximize comfort and safety without compromising shooting precision.

With better grip and optimized design, they offer superior accuracy and consistent, measurable results.
`;

export function OverviewSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#1C74BC] to-[#155a94] rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
          {/* Background circles for decoration */}
          <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-x-6 -translate-y-6 md:-translate-x-8 md:-translate-y-8"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full translate-x-8 translate-y-8 md:translate-x-12 md:translate-y-12"></div>
          <div className="absolute top-1/2 left-4 md:left-8 w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-full"></div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold text-center mb-8 md:mb-12 relative z-10">
            Get to know our main products!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {/* Pouches Card */}
            <div className="w-full">
              <ProductCard
                bgColor="rgba(255,255,255,1)"
                image="/images/products/roo-pouch-gallery/roo-pouch-gallery-09.jpg"
                titleBgColor="#000"
                title="Pouches"
                titleColor="#fff"
                description={pouchDescription}
                descriptionColor="black"
                className="h-full"
              />
            </div>

            {/* Frames Card */}
            <div className="w-full">
              <ProductCard
                bgColor="rgba(255,255,255,1)"
                image= "/images/products/misc-gallery/misc-gallery-11.jpg"
                titleBgColor="#000"
                title="Frames"
                titleColor="#fff"
                description={frameDescription}
                descriptionColor="black"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
