import Image from "next/image";
import type { StaticImageData } from "next/image";

const HERO_IMAGES = {
  showcase: "/images/hero/hero1.png",
  action: "/images/hero/hero2.png",
  detail: "/images/hero/hero3.png",
  lifestyle: "/images/hero/hero4.png",
} as const;

export function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#1C74BC] text-lg font-bold mb-4">
              Where precisions meets innovations
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionizing Precision Sports through Sustainable Slingshots
            </h1>
            <p className="text-lg text-600 mb-8">
              From backyard fun to competitive precision, we crafts the future of slingshot technology. 
              Experience unmatched accuracy, innovative design, and a community that reaches for the cosmic!
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={HERO_IMAGES.showcase}
                    alt="Catapult showcase"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={HERO_IMAGES.action}
                    alt="Catapult in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={HERO_IMAGES.detail}
                    alt="Product detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg">
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
