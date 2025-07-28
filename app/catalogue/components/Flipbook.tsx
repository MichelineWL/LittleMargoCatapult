"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';
import './../style/katalog.css'

// PDF path di public folder
const pdfPath = '/flipbook.pdf';

// Example images for the flipbook
const pages = [
  '/images/catalogue/1.jpg',
  '/images/catalogue/2.jpg',
  '/images/catalogue/3.jpg',
  '/images/catalogue/4.jpg',
  '/images/catalogue/5.jpg',
  '/images/catalogue/6.jpg',
  '/images/catalogue/7.jpg',
  '/images/catalogue/8.jpg',
  '/images/catalogue/9.jpg',
  '/images/catalogue/10.jpg',
  '/images/catalogue/11.jpg',
  '/images/catalogue/12.jpg',
  '/images/catalogue/13.jpg',
  '/images/catalogue/14.jpg',
  '/images/catalogue/15.jpg',
];

// Page component for the flipbook
interface PageProps {
  image: string;
  number: number;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image">
          <Image 
            src={props.image} 
            alt={`Page ${props.number}`}
            width={400} 
            height={600}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="page-number">{props.number}</div>
      </div>
    </div>
  );
});

Page.displayName = 'Page';

// Define interface for the pageflip methods
interface PageFlip {
  pageFlip: () => {
    flipPrev: () => void;
    flipNext: () => void;
  };
}

// Define event types for HTMLFlipBook
interface FlipBookFlipEvent {
  data: number;
}

function Flipbook() {
  const book = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // When book is initialized
  const onInit = () => {
    setTotalPages(pages.length);
  };

  // When page is flipped
  const onFlip = (e: FlipBookFlipEvent) => {
    setCurrentPage(e.data);
  };

  // Go to previous page
  const prevPage = () => {
    if (book.current) {
      book.current.pageFlip().flipPrev();
    }
  };

  // Go to next page
  const nextPage = () => {
    if (book.current) {
      book.current.pageFlip().flipNext();
    }
  };

  return (
    <div className='w-full flex flex-col gap-5 justify-center items-center overflow-hidden px-4'>
      
      {/* Flipbook - Hidden on mobile */}
      <div className="relative hidden md:block">
        {/* Flipbook component */}
        <HTMLFlipBook
          ref={book}
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={800}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={1000}
          startPage={0}
          drawShadow={true}
          useMouseEvents={true}
          renderOnlyPageLengthChange={false}
          usePortrait={false}
          onInit={onInit}
          onFlip={onFlip}
          className="demo-book"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
          
          // Add missing required properties
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          swipeDistance={10}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {pages.map((page, index) => (
            <Page key={index} image={page} number={index + 1} />
          ))}
        </HTMLFlipBook>
        
        {/* Controls */}
        <div className="absolute bottom-[-70px] left-0 right-0 flex justify-center gap-4">
          <button 
            onClick={prevPage} 
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:bg-gray-200 border border-gray-300 w-12 h-12 flex items-center justify-center"
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            <span className="text-2xl font-bold">&larr;</span>
          </button>
          
          <span className="px-4 py-2 bg-white rounded border border-gray-300">
            {currentPage + 1} / {totalPages}
          </span>
          
          <button 
            onClick={nextPage} 
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:bg-gray-200 border border-gray-300 w-12 h-12 flex items-center justify-center"
            disabled={currentPage === totalPages - 1}
            aria-label="Next page"
          >
            <span className="text-2xl font-bold">&rarr;</span>
          </button>
        </div>
      </div>
      
      {/* Download button - Always visible, centered on mobile */}
      <div className="mt-8 md:mt-20 mb-10">
        <a 
          href={pdfPath} 
          download 
          className="px-6 py-3 bg-[#1C74BC] text-white rounded-lg hover:bg-[#155A8A] transition-colors duration-300 text-center block"
        >
          Download Katalog PDF
        </a>
      </div>
      
      {/* Mobile message - Only visible on mobile */}
      <div className="block md:hidden text-center text-gray-600 px-4 mb-10">
        <p className="text-sm">
          Untuk pengalaman terbaik melihat katalog interaktif, silakan buka di desktop atau unduh PDF di atas.
        </p>
      </div>
    </div>
  );
}

export default Flipbook;