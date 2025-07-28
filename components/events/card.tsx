import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}
export const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white h-auto">
            <Image 
                src={imageUrl} 
                alt={title} 
                width={400} 
                height={300} 
                className="h-32 md:h-48 w-full object-cover bg-gray-200" 
            />
            <div className="px-4 md:px-6 py-4">
                <h2 className="font-semibold text-lg md:text-xl mb-2 line-clamp-2">{title}</h2>
                <p className="text-sm md:text-base text-gray-600 line-clamp-3">{description}</p>
            </div>
            <div className="px-4 md:px-6 pt-2 pb-4">
                <Link 
                    href={link} 
                    className="inline-block bg-[#BC1E2C] hover:bg-[#A61D2C] text-white font-bold py-2 px-4 rounded text-sm md:text-base w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See The Article
                </Link>
            </div>
        </div>
    );
};
