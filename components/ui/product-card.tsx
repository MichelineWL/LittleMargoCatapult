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
}

export function ProductCard({
  bgColor = "rgba(28,116,188,0.4)", // light blue with 40% opacity
  image,
  titleBgColor = "#fff",
  title,
  titleColor = "#111",
  description,
  descriptionColor = "#111",
  width = 320,
  height = 380,
  imageHeight = 200,
}: ProductCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col p-4"
      style={{ background: bgColor, width, height: height }}
    >
      <div 
        className="relative rounded-xl overflow-hidden mb-4 bg-white flex-shrink-0"
        style={{ 
          width: "100%",
          height: imageHeight 
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex">
          <div
            className="inline-block rounded-full px-5 py-2 text-xl font-bold w-fit"
            style={{ background: titleBgColor, color: titleColor }}
          >
            {title}
          </div>
        </div>
        <div className="flex-1 flex items-start">
          <p className="text-sm leading-relaxed text-left whitespace-pre-line" style={{ color: descriptionColor }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
