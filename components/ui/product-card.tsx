import Image from "next/image";
import React from "react";

interface ProductCardProps {
  bgColor?: string;
  image: string;
  titleBgColor?: string;
  title: string;
  titleColor?: string;
  description: string;
  descriptionColor?: string;
  width?: string | number;
  height?: string | number;
  imageHeight?: string | number;
  className?: string;
}

export function ProductCard({
  bgColor = "rgba(28,116,188,0.4)", // light blue with 40% opacity
  image,
  titleBgColor = "#fff",
  title,
  titleColor = "#111",
  description,
  descriptionColor = "#111",
  width,
  height,
  imageHeight,
  className = "",
}: ProductCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col p-3 md:p-4 lg:p-5 w-full h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] ${className}`}
      style={{ 
        background: bgColor,
        ...(width && typeof width === 'number' ? { maxWidth: width } : {}),
        ...(height && typeof height === 'number' ? { maxHeight: height } : {})
      }}
    >
      <div 
        className="relative rounded-xl overflow-hidden mb-3 md:mb-4 bg-white flex-shrink-0 w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]"
        style={{ 
          ...(imageHeight && typeof imageHeight === 'string' ? { height: imageHeight } : {})
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-3 flex-1">
        <div className="flex">
          <div
            className="inline-block rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 text-sm sm:text-base lg:text-xl font-bold w-fit"
            style={{ background: titleBgColor, color: titleColor }}
          >
            {title}
          </div>
        </div>
        <div className="flex-1 flex items-start">
          <p 
            className="text-xs sm:text-sm lg:text-sm leading-relaxed text-left"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
