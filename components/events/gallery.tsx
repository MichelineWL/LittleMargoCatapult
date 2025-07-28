import { useState } from "react";
import { galleryItems } from "@/content/events/gallery";
import Image from "next/image";

export default function Gallery() {
    const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const getImageSizeClass = (imageIndex: number, columnId: number, initialSize: string) => {
    // Mobile heights - fixed untuk semua kondisi
    const mobileHeight = imageIndex % 2 === 0 ? "h-[200px]" : "h-[120px]";
    
    // Desktop heights
    let desktopHeight;
    
    if (hoveredColumn === columnId) {
      // Saat hover - pattern berbeda untuk kolom ganjil vs genap
      if (columnId === 1 || columnId === 3) {
        // Kolom 1 & 3: gambar kedua (index ganjil) yang membesar
        desktopHeight = imageIndex % 2 === 1 ? "md:h-[350px]" : "md:h-[100px]";
      } else {
        // Kolom 2 & 4: gambar pertama (index genap) yang membesar
        desktopHeight = imageIndex % 2 === 0 ? "md:h-[350px]" : "md:h-[100px]";
      }
    } else {
      // Default state - gunakan initialSize
      desktopHeight = initialSize === 'large' ? "md:h-[300px]" : "md:h-[150px]";
    }
    
    return `${mobileHeight} ${desktopHeight}`;
  };
    return (
        <>
        {/* Gallery Section */}
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl my-6 md:my-8 lg:my-10 px-2 text-center">Take a look at our <span className='text-[#BC1E2C]'>events</span></h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-2 md:p-4 max-w-7xl mx-auto">
                  {/* Column 1 */}
                  <div 
                    className="flex flex-col gap-3 md:gap-4" 
                    onMouseEnter={() => setHoveredColumn(1)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <Image 
                      src={galleryItems[0].imageUrl} 
                      alt={galleryItems[0].alt}
                      width={500}
                      height={300} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(0, 1, galleryItems[0].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[1].imageUrl} 
                      alt={galleryItems[1].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(1, 1, galleryItems[1].initialSize)}`}
                    />
                  </div>
                  
                  {/* Column 2 */}
                  <div 
                    className="flex flex-col gap-3 md:gap-4"
                    onMouseEnter={() => setHoveredColumn(2)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <Image 
                      src={galleryItems[2].imageUrl} 
                      alt={galleryItems[2].alt}
                      width={500}
                      height={300}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(2, 2, galleryItems[2].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[3].imageUrl} 
                      alt={galleryItems[3].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(3, 2, galleryItems[3].initialSize)}`}
                    />
                  </div>
                  
                  {/* Column 3 - Hidden on small screens */}
                  <div 
                    className="hidden lg:flex flex-col gap-3 md:gap-4"
                    onMouseEnter={() => setHoveredColumn(3)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <Image 
                      src={galleryItems[4].imageUrl} 
                      alt={galleryItems[4].alt}
                      width={500}
                      height={300}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(4, 3, galleryItems[4].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[5].imageUrl} 
                      alt={galleryItems[5].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(5, 3, galleryItems[5].initialSize)}`}
                    />
                  </div>
                  
                  {/* Column 4 - Hidden on small screens */}
                  <div 
                    className="hidden lg:flex flex-col gap-3 md:gap-4"
                    onMouseEnter={() => setHoveredColumn(4)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <Image 
                      src={galleryItems[6].imageUrl} 
                      alt={galleryItems[6].alt}
                      width={500}
                      height={300}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(6, 4, galleryItems[6].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[7].imageUrl} 
                      alt={galleryItems[7].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-500 ${getImageSizeClass(7, 4, galleryItems[7].initialSize)}`}
                    />
                  </div>
                </div>
        </>
    )
}