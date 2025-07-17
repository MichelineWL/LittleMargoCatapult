import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA_IMAGES = [
  {
    src: "/images/products/mystery-product-hero.png",
    alt: "Catapult Detail 1"
  },
  {
    src: "/images/products/mystery-product-hero.png",
    alt: "Catapult Detail 2"
  },
  {
    src: "/images/products/mystery-product-hero.png",
    alt: "Catapult Detail 3"
  },
  {
    src: "/images/products/mystery-product-hero.png",
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
                asChild
                className="bg-[#BC1E2C] hover:bg-[#a01824] text-white"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button
                asChild
                className="bg-[#BC1E2C] hover:bg-[#a01824] text-white"
              >
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button
                asChild
                className="bg-[#1C74BC] hover:bg-[#165a94] text-white"
              >
                <Link href="https://wa.me/620123456789">I need to consult!</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
