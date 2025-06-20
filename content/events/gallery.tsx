export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
  initialSize: 'small' | 'large'
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/images/events/event1.jpg",
    alt: "Event 1",
    initialSize: 'small'
  },
  {
    id: 2,
    imageUrl: "/images/events/event2.jpg",
    alt: "Event 2",
    initialSize: 'large'
  },
  {
    id: 3,
    imageUrl: "/images/events/event3.jpg",
    alt: "Event 3",
    initialSize: 'large'
  },
  {
    id: 4,
    imageUrl: "/images/events/event4.jpg",
    alt: "Event 4",
    initialSize: 'small'
  },
  {
    id: 5,
    imageUrl: "/images/events/event5.jpg", 
    alt: "Event 5",
    initialSize: 'small'
  },
  {
    id: 6,
    imageUrl: "/images/events/event6.jpg",
    alt: "Event 6", 
    initialSize: 'large'
  },
  {
    id: 7, 
    imageUrl: "/images/events/event7.jpg",
    alt: "Event 7",
    initialSize: 'large' 
  },
  {
    id: 8,
    imageUrl: "/images/events/event8.jpg",
    alt: "Event 8",
    initialSize: 'small' 
    }
];