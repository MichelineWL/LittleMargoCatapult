import dynamic from 'next/dynamic';
import Image from 'next/image';

const HeroSection = dynamic(() => import('@/components/home/1.hero').then(mod => mod.HeroSection), { ssr: true });
const StatsSection = dynamic(() => import('@/components/home/2.stats').then(mod => mod.StatsSection), { ssr: true });
const ProductsSection = dynamic(() => import('@/components/home/3.products').then(mod => mod.ProductsSection), { ssr: true });
const MaterialsSection = dynamic(() => import('@/components/home/4.materials').then(mod => mod.MaterialsSection), { ssr: true });
const LocalPresenceSection = dynamic(() => import('../components/home/5.local-presence').then(mod => mod.LocalPresenceSection), { ssr: true });
const WorldwideSection = dynamic(() => import('../components/home/6.worldwide').then(mod => mod.WorldwideSection), { ssr: true });
const ScrollableImagesSection = dynamic(() => import('../components/home/7.scrollable-images').then(mod => mod.ScrollableImagesSection), { ssr: true });
const CTASection = dynamic(() => import('@/components/home/8.cta').then(mod => mod.CTASection), { ssr: true });

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            <MaterialsSection />
            <LocalPresenceSection />
            <WorldwideSection />
          </div>
        </div>
      </section>
      <ScrollableImagesSection />
      <CTASection />
    </main>
  );
}
