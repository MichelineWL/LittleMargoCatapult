interface calendarEvent {
    id: number;
    title: string;
    location: string;
    date: string;
    imageUrl: string;
    category: string; // Making this required now
}

export const calendarEvents: calendarEvent[] = [
    {
        id: 1,
        title: "Kompetisi Slingshot Nasional",
        location: "Lapangan Kukusan, Depok, Jawa Barat",
        date: "Thursday, 19th June 2025",
        imageUrl: "/images/events/workshop1.jpg",
        category: "Competition" // Direct category assignment
    },
    {
        id: 2,
        title: "Katapel Workshop",
        location: "Convention Center",
        date: "July 20, 2025",
        imageUrl: "/images/events/conference1.jpg",
        category: "Competition" // Direct category assignment
    },
    {
        id: 3,
        title: "Annual Gathering 2025",
        location: "Online",
        date: "August 10, 2025",
        imageUrl: "/images/events/webinar1.jpg",
        category: "Workshop" // Direct category assignment
    },
    {
        id: 4,
        title: "Business Networking Night",
        location: "Downtown Hotel",
        date: "September 5, 2025",
        imageUrl: "/images/events/networking1.jpg",
        category: "Gathering" // Direct category assignment
    },
    {
        id: 5,
        title: "Annual Gathering 2025",
        location: "Online",
        date: "August 10, 2025",
        imageUrl: "/images/events/webinar1.jpg",
        category: "Workshop" // Direct category assignment
    },
];

export const calendarCategories = [
    { id: 1, name: "Competition" },
    { id: 2, name: "Gathering" },
    { id: 3, name: "Workshop" }
];

// Use the events directly without mapping
export const allCalendarEvents = calendarEvents;

export const calendarEventsByCategory: Record<string, calendarEvent[]> = {
    competition: calendarEvents.filter(event => 
        event.category === "Competition"),
    gathering: calendarEvents.filter(event => 
        event.category === "Gathering"),
    workshop: calendarEvents.filter(event => 
        event.category === "Workshop")
};

export const getCalendarEventsByCategory = (category: string): calendarEvent[] => {
    return calendarEventsByCategory[category] || [];
};

export const getAllCalendarEvents = (): calendarEvent[] => {
    return allCalendarEvents;
};

// Add index to the interface
interface CalendarCardProps extends calendarEvent {
  index?: number; // Optional index for alternating layout
}

export const CalendarCard: React.FC<CalendarCardProps> = ({ 
  id, title, location, date, imageUrl, category, index 
}) => {
  // Use index if provided, otherwise fallback to id
  const isEven = index !== undefined ? index % 2 === 1 : id % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-4 bg-white rounded-xl shadow-md`}>
      <div className="w-full sm:w-1/2 h-48 sm:h-auto overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`flex flex-col justify-between p-4 bg-[#1C74BC] rounded-xl text-white w-full sm:w-1/2 ${isEven ? 'sm:text-right' : ''}`}>
        <div>
          <span className={`bg-white text-[#1C74BC] text-xs font-semibold px-2 py-1 rounded-md mb-2 inline-block ${isEven ? 'ml-auto' : ''}`}>
            {category || "Event"}
          </span>
          <h3 className="text-lg font-semibold leading-tight mb-2">
            {title}
          </h3>
        </div>
        <div className="text-sm space-y-1">
          <div className={`flex items-center gap-2 ${isEven ? 'justify-end' : ''}`}>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2C6.13 2 3 5.13 3 9c0 4.42 6.34 9.55 6.59 9.74.27.2.64.2.91 0C10.66 18.55 17 13.42 17 9c0-3.87-3.13-7-7-7zM5 9a5 5 0 1110 0c0 2.93-4.12 6.86-5 7.54C9.12 15.86 5 11.93 5 9z" />
              <path d="M10 11a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span>{location}</span>
          </div>
          <div className={`flex items-center gap-2 ${isEven ? 'justify-end' : ''}`}>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5 20V9h14v11H5z" />
            </svg>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

