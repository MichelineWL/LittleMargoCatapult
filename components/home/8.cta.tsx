import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-6 md:space-y-8">
          {/* CTA Content */}
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to shoot with us?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Button
                asChild
                className="bg-[#BC1E2C] hover:bg-[#a01824] text-white text-sm md:text-base px-6 py-2"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button
                asChild
                className="bg-[#BC1E2C] hover:bg-[#a01824] text-white text-sm md:text-base px-6 py-2"
              >
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button
                asChild
                className="bg-[#1C74BC] hover:bg-[#165a94] text-white text-sm md:text-base px-6 py-2"
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
