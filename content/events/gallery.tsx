export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
  initialSize: 'small' | 'large'
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/images/events/1.jpg",
    alt: "Slingshot Competition Event",
    initialSize: 'large'
  },
  {
    id: 2,
    imageUrl: "/images/events/2.jpg",
    alt: "Community Workshop",
    initialSize: 'small'
  },
  {
    id: 3,
    imageUrl: "/images/events/3.jpg",
    alt: "Catapult Training Session",
    initialSize: 'small'
  },
  {
    id: 4,
    imageUrl: "/images/events/4.jpg",
    alt: "Annual Gathering",
    initialSize: 'large'
  },
  {
    id: 5,
    imageUrl: "/images/events/5.JPG", 
    alt: "Slingshot Tournament",
    initialSize: 'large'
  },
  {
    id: 6,
    imageUrl: "/images/events/6.JPG",
    alt: "Skills Development Workshop", 
    initialSize: 'small'
  },
  {
    id: 7, 
    imageUrl: "/images/events/7.JPG",
    alt: "Community Event",
    initialSize: 'small' 
  },
  {
    id: 8,
    imageUrl: "/images/events/8.JPG",
    alt: "Little Margo Event",
    initialSize: 'large' 
    }
];