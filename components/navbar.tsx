"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/products", label: "Product" },
    { href: "/events", label: "Event" },
    { href: "/catalogue", label: "Catalogue" }
  ]

  return (
    <nav className="fixed w-full bg-[#BC1E2C] z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 md:py-3 flex justify-between items-center min-h-[60px] md:min-h-[70px]">
        <Link href="/" className="flex items-center gap-1.5 md:gap-2" onClick={closeSheet}>
          <Image
            src="/images/logo.png"
            alt="Little Margo Logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="font-bold text-lg md:text-2xl text-white">Little Margo</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className="font-bold text-white hover:text-white/80 text-lg lg:text-xl transition-colors duration-200">
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1">
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
          
          {/* Dropdown Menu */}
          <div className={`absolute top-full right-0 mt-2 w-48 bg-[#BC1E2C] border border-white/20 rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <div className="py-2">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="block px-4 py-3 font-bold text-white hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}