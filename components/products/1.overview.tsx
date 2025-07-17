import { ProductCard } from '@/components/ui/product-card';

const pouchDescription = `Our bullet pouches are crafted from authentic kangaroo leather—soft yet incredibly durable.

Thoughtfully designed for shooting comfort, they bring a distinct feel and flexibility, making them one of Little Margo Catapults’ signature products.
`;

const frameDescription = `Each frame is engineered with ergonomic shapes that maximize comfort and safety without compromising shooting precision.

With better grip and optimized design, they offer superior accuracy and consistent, measurable results.
`;

export function OverviewSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#1C74BC] to-[#155a94] rounded-2xl p-8 shadow-lg relative overflow-hidden">
          {/* Background circles for decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
          <div className="absolute top-1/2 left-8 w-24 h-24 bg-white/5 rounded-full"></div>
          
          <h2 className="text-3xl text-white font-bold text-center mb-12 relative z-10">
            Get to know our main products!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {/* Pouches Card */}
            <ProductCard
              bgColor="rgba(255,255,255,1)"
              image="/images/products/klassix.png"
              titleBgColor="#000"
              title="Pouches"
              titleColor="#fff"
              description={pouchDescription}
              descriptionColor="black"
              width={"100%"}
              height={480}
              imageHeight={250}
            />

            {/* Frames Card */}
            <ProductCard
              bgColor="rgba(255,255,255,1)"
              image="/images/products/apollo.png"
              titleBgColor="#000"
              title="Frames"
              titleColor="#fff"
              description={frameDescription}
              descriptionColor="black"
              width={"100%"}
              height={480}
              imageHeight={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
