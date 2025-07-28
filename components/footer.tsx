import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import {
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer className="bg-[#BC1E2C] pt-12 md:pt-16 pb-6 md:pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Little Margo Logo"
                width={120}
                height={40}
                className="w-24 md:w-32 h-auto"
              />
            </div>
            <p className="mb-3 md:mb-4 text-sm md:text-base">
              Where precisions meets innovations in sustainable slingshots.
            </p>
            <p className="text-xs md:text-sm opacity-80">
              Depok, Jawa Barat Indonesia
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Products</h4>
            <ul className="space-y-1.5 md:space-y-2 opacity-80 text-sm md:text-base">
              <li><Link href="/products/klasik" className="hover:opacity-100 transition-opacity">Klasik</Link></li>
              <li><Link href="/products/a-six" className="hover:opacity-100 transition-opacity">A-Six</Link></li>
              <li><Link href="/products/die-t" className="hover:opacity-100 transition-opacity">Die-T</Link></li>
              <li><Link href="/products/apollo" className="hover:opacity-100 transition-opacity">Apollo</Link></li>
              <li><Link href="/products/margo-latte" className="hover:opacity-100 transition-opacity">Margo Latte</Link></li>
              <li><Link href="/products/fedora" className="hover:opacity-100 transition-opacity">Fedora</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Social Media</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="https://instagram.com/littlemargo.catapult" className="flex items-center gap-2 group">
                  <div className="bg-white p-1 md:p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/instagram.svg" alt="Instagram" width={16} height={16} className="md:w-5 md:h-5" />
                  </div>
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm md:text-base">Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com/LittleMargoCatapults/" className="flex items-center gap-2 group">
                  <div className="bg-white p-1 md:p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/facebook.svg" alt="Facebook" width={16} height={16} className="md:w-5 md:h-5" />
                  </div>
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm md:text-base">Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="https://tokopedia.com/littlemargocatapults" className="flex items-center gap-2 group">
                  <div className="bg-white p-1 md:p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/tokopedia.svg" alt="Tokopedia" width={16} height={16} className="md:w-5 md:h-5" />
                  </div>
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm md:text-base">Tokopedia</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="mailto:loremipsum@gmail.com" className="flex items-center gap-2 group">
                  <div className="bg-white p-1 md:p-1.5 rounded-full">
                    <EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5 text-[#BC1E2C]" />
                  </div>
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm md:text-base break-all">loremipsum@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+6281234567890" className="flex items-center gap-2 group">
                  <div className="bg-white p-1 md:p-1.5 rounded-full">
                    <PhoneIcon className="w-4 h-4 md:w-5 md:h-5 text-[#BC1E2C]" />
                  </div>
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm md:text-base">+62 812-3456-7890</span>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/6281234567890" className="flex items-center gap-2 group">
                  <div className="bg-white p-1 md:p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="md:w-5 md:h-5" />
                  </div>
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm md:text-base">+62 812-3456-7890</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 md:my-8" />

        <div className="text-center text-xs md:text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Little Margo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}