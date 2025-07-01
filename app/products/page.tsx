import dynamic from 'next/dynamic';

const OverviewSection = dynamic(() => import('@/components/products/1.overview').then(mod => mod.OverviewSection), { ssr: true });
const KlassixSeriesSection = dynamic(() => import('@/components/products/2.klassix').then(mod => mod.KlassixSeriesSection), { ssr: true });
const DieTSeriesSection = dynamic(() => import('@/components/products/3.die-t').then(mod => mod.DieTSeriesSection), { ssr: true });
const ApolloSeriesSection = dynamic(() => import('@/components/products/4.apollo').then(mod => mod.ApolloSeriesSection), { ssr: true });
const CustomizationSection = dynamic(() => import('@/components/products/5.customization').then(mod => mod.CustomizationSection), { ssr: true });

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <OverviewSection />
      <KlassixSeriesSection />
      <DieTSeriesSection />
      <ApolloSeriesSection />
      <CustomizationSection />
    </main>
  );
}