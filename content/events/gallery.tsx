export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
  initialSize: 'small' | 'large'
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/images/events/event-01.jpg",
    alt: "Event 1",
    initialSize: 'small'
  },
  {
    id: 2,
    imageUrl: "/images/events/event-02.jpg",
    alt: "Event 2",
    initialSize: 'large'
  },
  {
    id: 3,
    imageUrl: "/images/events/event-03.jpg",
    alt: "Event 3",
    initialSize: 'large'
  },
  {
    id: 4,
    imageUrl: "/images/events/event-04.jpg",
    alt: "Event 4",
    initialSize: 'small'
  },
  {
    id: 5,
    imageUrl: "/images/events/event-05.jpg", 
    alt: "Event 5",
    initialSize: 'small'
  },
  {
    id: 6,
    imageUrl: "/images/events/event-06.jpg",
    alt: "Event 6", 
    initialSize: 'large'
  },
  {
    id: 7, 
    imageUrl: "/images/events/event-07.jpg",
    alt: "Event 7",
    initialSize: 'large' 
  },
  {
    id: 8,
    imageUrl: "/images/events/event-08.jpg",
    alt: "Event 8",
    initialSize: 'small' 
    }
];