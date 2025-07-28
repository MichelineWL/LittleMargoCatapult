import { useState } from "react";
import { galleryItems } from "@/content/events/gallery";
import Image from "next/image";

export default function Gallery() {
    const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const getImageSizeClass = (id: number, pairId: number, initialSize: string) => {
    if (hoveredColumn === pairId) {
      if (pairId === 2 || pairId === 4) {
        if (id % 2 === 0) return "h-[300px]";
        return "h-[150px]";
      }
      
      if (id % 2 === 1) return "h-[300px]";
      return "h-[150px]";
    } 
    
    return initialSize === 'small' ? "h-[150px]" : "h-[300px]";
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
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 h-[200px] md:${getImageSizeClass(1, 1, galleryItems[0].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[1].imageUrl} 
                      alt={galleryItems[1].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 h-[120px] md:${getImageSizeClass(2, 1, galleryItems[1].initialSize)}`}
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
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 h-[120px] md:${getImageSizeClass(3, 2, galleryItems[2].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[3].imageUrl} 
                      alt={galleryItems[3].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 h-[200px] md:${getImageSizeClass(4, 2, galleryItems[3].initialSize)}`}
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
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(5, 3, galleryItems[4].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[5].imageUrl} 
                      alt={galleryItems[5].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(6, 3, galleryItems[5].initialSize)}`}
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
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(7, 4, galleryItems[6].initialSize)}`}
                    />
                    <Image 
                      src={galleryItems[7].imageUrl} 
                      alt={galleryItems[7].alt}
                      width={500}
                      height={150}  
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(8, 4, galleryItems[7].initialSize)}`}
                    />
                  </div>
                </div>
        </>
    )
}