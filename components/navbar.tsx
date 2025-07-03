import Link from "next/link"
import Image from "next/image"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#BC1E2C] z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Little Margo Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="font-bold text-2xl">Little Margo</span>
          </Link>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white hover:text-[#BC1E2C]/90 text-xl">
                  Product
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white hover:text-[#BC1E2C]/90 text-xl">
                  Event
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/catalogue" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white hover:text-[#BC1E2C]/90 text-xl">
                  Catalogue
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}