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
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-100 w-200">
            <Image src={imageUrl} 
                alt={title} 
                width={400} 
                height={300} 
                className="h-48 w-88 m-4 object-cover bg-gray-200 rounded" 
            />
            <div className="px-6 py-4">
                <h2 className="font-semibold text-xl mb-2 truncate">{title}</h2>
                <p className="text-base truncate">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link 
                    href={link} 
                    className="inline-block bg-[#BC1E2C] hover:bg-[#A61D2C] text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See The Article
                </Link>
            </div>
        </div>
    );
};
