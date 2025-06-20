import { useState } from "react";
import { galleryItems } from "@/content/events/gallery";

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
                <h1 className="font-bold text-4xl my-10">Take a look at our <span className='text-[#BC1E2C]'>events</span></h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
                  {/* Column 1 */}
                  <div 
                    className="flex flex-col gap-4" 
                    onMouseEnter={() => setHoveredColumn(1)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <img 
                      src={galleryItems[0].imageUrl} 
                      alt={galleryItems[0].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(1, 1, galleryItems[0].initialSize)}`}
                    />
                    <img 
                      src={galleryItems[1].imageUrl} 
                      alt={galleryItems[1].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(2, 1, galleryItems[1].initialSize)}`}
                    />
                  </div>
                  
                  {/* Column 2 */}
                  <div 
                    className="flex flex-col gap-4"
                    onMouseEnter={() => setHoveredColumn(2)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <img 
                      src={galleryItems[2].imageUrl} 
                      alt={galleryItems[2].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(3, 2, galleryItems[2].initialSize)}`}
                    />
                    <img 
                      src={galleryItems[3].imageUrl} 
                      alt={galleryItems[3].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(4, 2, galleryItems[3].initialSize)}`}
                    />
                  </div>
                  
                  {/* Column 3 */}
                  <div 
                    className="flex flex-col gap-4"
                    onMouseEnter={() => setHoveredColumn(3)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <img 
                      src={galleryItems[4].imageUrl} 
                      alt={galleryItems[4].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(5, 3, galleryItems[4].initialSize)}`}
                    />
                    <img 
                      src={galleryItems[5].imageUrl} 
                      alt={galleryItems[5].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(6, 3, galleryItems[5].initialSize)}`}
                    />
                  </div>
                  
                  {/* Column 4 */}
                  <div 
                    className="flex flex-col gap-4"
                    onMouseEnter={() => setHoveredColumn(4)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <img 
                      src={galleryItems[6].imageUrl} 
                      alt={galleryItems[6].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(7, 4, galleryItems[6].initialSize)}`}
                    />
                    <img 
                      src={galleryItems[7].imageUrl} 
                      alt={galleryItems[7].alt} 
                      className={`w-full object-cover rounded-lg shadow-md transition-all duration-300 ${getImageSizeClass(8, 4, galleryItems[7].initialSize)}`}
                    />
                  </div>
                </div>
        </>
    )
}