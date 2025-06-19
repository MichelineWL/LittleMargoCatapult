import Image from "next/image";
import { Button } from "@/components/ui/button";

const CTA_IMAGES = [
  {
    src: "/images/products/x.png",
    alt: "Catapult Detail 1"
  },
  {
    src: "/images/products/x.png",
    alt: "Catapult Detail 2"
  },
  {
    src: "/images/products/x.png",
    alt: "Catapult Detail 3"
  },
  {
    src: "/images/products/x.png",
    alt: "Catapult Detail 4"
  }
] as const;

export function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* CTA Content */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to shoot with us?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-[#BC1E2C] hover:bg-[#a01824] text-white"
              >
                Explore Products
              </Button>
              <Button
                className="bg-[#BC1E2C] hover:bg-[#a01824] text-white"
              >
                Explore Events
              </Button>
              <Button
                className="bg-[#1C74BC] hover:bg-[#165a94] text-white"
              >
                I need to consult!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
