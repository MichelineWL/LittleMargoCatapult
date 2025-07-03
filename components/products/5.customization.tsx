import Image from 'next/image';
import { Button } from '../ui/button';
import { ScrollableImagesSection } from '../home/7.scrollable-images';
import Link from 'next/dist/client/link';

export function CustomizationSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">We&apos;re not just ready-to-buy. Customization is what we do best.</h2>
      <p className="text-gray-600 text-center">Let&apos;s talk — we&apos;ll tune your catapult to match your style</p>
      <ScrollableImagesSection/>   
      <div className="flex justify-center gap-4 mt-8">
        <Link href="https://wa.me/620123456789" passHref>
          <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
            <Image 
              src="/images/icons/sosmed/whatsapp.svg" 
              alt="WhatsApp" 
              width={24} 
              height={24} 
              className="mr-2 filter brightness-0 invert"
            />
            WhatsApp Us
          </Button>
        </Link>
        <Link href="https://www.facebook.com/messages/t/yourpageid" passHref>
          <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
            <Image 
              src="/images/icons/sosmed/facebook.svg" 
              alt="Facebook" 
              width={24} 
              height={24} 
              className="mr-2 filter brightness-0 invert"
            />
            Chat through Facebook Inbox
          </Button>
        </Link>
      </div>
    </section>
  );
}
