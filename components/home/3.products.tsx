import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Product } from "@/types";

const PRODUCTS: Product[] = [
  {
    name: "Klassix",
    image: "/images/products/klassix.png",
    description: "A regular Y-shaped design with a signature bee-tail curve.",
  },
  {
    name: "A-Six",
    image: "/images/products/a-six.png",
    description: "A fusion of Klassix and Die-T for a blend of traditional and modern slingshot design.",
  },
  {
    name: "Die-T",
    image: "/images/products/die-t.png",
    description: "Slim and elegant – featuring a bee-tail curve for unique looks without sacrificing comfort.",
  },
  {
    name: "Apollo",
    image: "/images/products/apollo.png",
    description: "Rocket-inspired shape, built to launch with power.",
  },
  {
    name: "Margo Latte",
    image: "/images/products/margo-latte.png",
    description: "Ergonomic 'footprint' grip design, inspired by primitive tools for a natural hold.",
  },
  {
    name: "Fedora",
    image: "/images/products/fedora.png",
    description: "Tailored for a modern slingshot grip—sleek, refined, and elegant.",
  },
];

export function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Not just any catapults—these are our designs you won&apos;t see elsewhere.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div 
              key={product.name}
              className="bg-[#1C74BC] rounded-xl overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-4 bg-[#1C74BC] text-white">
                <div className="inline-block bg-white text-black rounded-full px-4 py-1 text-sm font-medium mb-3">
                  {product.name}
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
