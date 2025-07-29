import Image from "next/image";

const HERO_IMAGES = {
  showcase: "/images/products/misc-gallery/misc-gallery-10.jpg",
  action: "/images/products/misc-gallery/misc-gallery-11.jpg",
  detail: "/images/products/misc-gallery/misc-gallery-17.jpg",
  lifestyle: "/images/products/misc-gallery/misc-gallery-08.jpg",
} as const;

export function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[#1C74BC] text-sm md:text-lg font-bold mb-4">
              Where precisions meets innovations
            </h2>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Revolutionizing Precision Sports through Sustainable Slingshots
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed">
              From backyard fun to competitive precision, we crafts the future of slingshot technology. 
              Experience unmatched accuracy, innovative design, and a community that reaches for the cosmic!
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="space-y-2 md:space-y-4">
                <div className="relative h-32 md:h-48 overflow-hidden rounded-3xl">
                  <Image
                    src={HERO_IMAGES.showcase}
                    alt="Catapult showcase"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 md:h-64 overflow-hidden rounded-3xl">
                  <Image
                    src={HERO_IMAGES.detail}
                    alt="Product detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2 md:space-y-4 pt-4 md:pt-8">
                <div className="relative h-40 md:h-64 overflow-hidden rounded-3xl">
                  <Image
                    src={HERO_IMAGES.action}
                    alt="Catapult in action"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 md:h-48 overflow-hidden rounded-3xl">
                  <Image
                    src={HERO_IMAGES.lifestyle}
                    alt="Product showcase"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
