import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import {
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer className="bg-[#BC1E2C] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Little Margo Logo"
                width={150}
                height={50}
              />
            </div>
            <p className="mb-4">
              Where precisions meets innovations in sustainable slingshots.
            </p>
            <p className="text-sm opacity-80">
              Depok, Jawa Barat Indonesia
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 opacity-80">
              <li><Link href="/products/klasik" className="hover:opacity-100">Klasik</Link></li>
              <li><Link href="/products/a-six" className="hover:opacity-100">A-Six</Link></li>
              <li><Link href="/products/die-t" className="hover:opacity-100">Die-T</Link></li>
              <li><Link href="/products/apollo" className="hover:opacity-100">Apollo</Link></li>
              <li><Link href="/products/margo-latte" className="hover:opacity-100">Margo Latte</Link></li>
              <li><Link href="/products/fedora" className="hover:opacity-100">Fedora</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social Media</h4>
            <ul className="space-y-3">
              <li>
                <Link href="https://instagram.com/littlemargo.catapult" className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/instagram.svg" alt="Instagram" width={20} height={20} />
                  </div>
                  <span className="opacity-80 hover:opacity-100">Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com/LittleMargoCatapults/" className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/facebook.svg" alt="Facebook" width={20} height={20} />
                  </div>
                  <span className="opacity-80 hover:opacity-100">Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="https://tokopedia.com/littlemargocatapults" className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/tokopedia.svg" alt="Tokopedia" width={20} height={20} />
                  </div>
                  <span className="opacity-80 hover:opacity-100">Tokopedia</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Link href="mailto:loremipsum@gmail.com" className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded-full">
                    <EnvelopeIcon className="w-5 h-5 text-[#BC1E2C]" />
                  </div>
                  <span className="opacity-80">loremipsum@gmail.com</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="tel:+6281234567890" className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded-full">
                    <PhoneIcon className="w-5 h-5 text-[#BC1E2C]" />
                  </div>
                  <span className="opacity-80">+62 812-3456-7890</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="https://wa.me/6281234567890" className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded-full">
                    <Image src="/images/icons/sosmed/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                  </div>
                  <span className="opacity-80">+62 812-3456-7890</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-600">
          <p>&copy; {new Date().getFullYear()} Little Margo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}