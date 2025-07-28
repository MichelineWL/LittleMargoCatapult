"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <nav className="fixed w-full bg-[#BC1E2C] z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 md:py-3 flex justify-between items-center min-h-[60px] md:min-h-[70px]">
        <Link href="/" className="flex items-center gap-1.5 md:gap-2" onClick={closeSheet}>
          <Image
            src="/images/logo.png"
            alt="Little Margo Logo"
            width={40}
            height={40}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
            priority
          />
          <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white">Little Margo</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="gap-6 lg:gap-8">
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white hover:text-white/90 text-lg lg:text-xl transition-colors duration-200">
                  Product
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white hover:text-white/90 text-lg lg:text-xl transition-colors duration-200">
                  Event
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/catalogue" legacyBehavior passHref>
                <NavigationMenuLink className="font-bold text-white hover:text-white/90 text-lg lg:text-xl transition-colors duration-200">
                  Catalogue
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger 
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Open navigation menu"
          >
            <div className="flex flex-col gap-1">
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="bg-[#BC1E2C] border-none w-[280px] sm:w-[320px]"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center gap-3 pt-6 pb-8 border-b border-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Little Margo Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-lg text-white">Little Margo</span>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-col gap-2 mt-6 flex-1">
                <Link 
                  href="/products" 
                  className="group font-bold text-white hover:text-white/90 text-lg py-4 px-4 rounded-lg border-b border-white/10 hover:bg-white/5 transition-all duration-200 flex items-center justify-between"
                  onClick={closeSheet}
                >
                  <span>Product</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/events" 
                  className="group font-bold text-white hover:text-white/90 text-lg py-4 px-4 rounded-lg border-b border-white/10 hover:bg-white/5 transition-all duration-200 flex items-center justify-between"
                  onClick={closeSheet}
                >
                  <span>Event</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/catalogue" 
                  className="group font-bold text-white hover:text-white/90 text-lg py-4 px-4 rounded-lg border-b border-white/10 hover:bg-white/5 transition-all duration-200 flex items-center justify-between"
                  onClick={closeSheet}
                >
                  <span>Catalogue</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Footer Info */}
              <div className="mt-auto pb-6 pt-4 border-t border-white/20">
                <p className="text-white/70 text-sm text-center">
                  Where precision meets innovation
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}