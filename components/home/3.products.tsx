type Product = {
  name: string;
  image: string;
  description: string;
};
import { ProductCard } from "@/components/ui/product-card";

const PRODUCTS: Product[] = [
  {
    name: "Klassix",
    image: "/images/products/klassix-gallery/klassix-gallery-01.jpg",
    description: "A regular Y-shaped design with a signature bee-tail curve.",
  },
  {
    name: "A-Six",
    image: "/images/products/a-six-gallery/a-six-gallery-01.jpg",
    description: "A fusion of Klassix and Die-T for a blend of traditional and modern slingshot design.",
  },
  {
    name: "Die-T",
    image: "/images/products/die-t-gallery/die-t-gallery-01.jpg",
    description: "Slim and elegant – featuring a bee-tail curve for unique looks without sacrificing comfort.",
  },
  {
    name: "Apollo",
    image: "/images/products/apollo-gallery/apollo-gallery-01.jpg",
    description: "Rocket-inspired shape, built to launch with power.",
  },
  {
    name: "Margo Latte",
    image: "/images/products/margo-latte-gallery/margo-latte-gallery-01.jpg",
    description: "Ergonomic 'footprint' grip design, inspired by primitive tools for a natural hold.",
  },
  {
    name: "Fedora",
    image: "/images/products/fedora-gallery/fedora-gallery-01.jpg",
    description: "Tailored for a modern slingshot grip—sleek, refined, and elegant.",
  },
];

export function ProductsSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12 leading-tight px-4">
          Not just any catapults—these are our designs you won&apos;t see elsewhere.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="w-full flex justify-center">
              <ProductCard
                bgColor="rgba(28,116,188,0.4)"
                image={product.image}
                titleBgColor="#fff"
                title={product.name}
                titleColor="#111"
                description={product.description}
                descriptionColor="#111"
                className="w-full max-w-sm mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
