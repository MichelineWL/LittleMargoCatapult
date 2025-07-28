import Image from "next/image";
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
        title: "Liga Ketapel Jakarta",
        location: "Jl.Situ Indah No 10, Tugu, Kec.Cimanggis, Kota Depok, Jawa Barat",
        date: "13 Juli 2025",
        imageUrl: "/images/calendar/liga1.jpg",
        category: "competition"
    },
    {
        id: 2,
        title: "Liga Ketapel Jakarta",
        location: "Jl.Situ Indah No 10, Tugu, Kec.Cimanggis, Kota Depok, Jawa Barat",
        date: "13 Juli 2025",
        imageUrl: "/images/calendar/liga2.jpg",
        category: "competition"
    },
    {
        id: 3,
        title: "CFD - Main Bareng Little Margo",
        location: "CFD Margonda, depan balai kota depok",
        date: "13 Juli 2025",
        imageUrl: "/images/calendar/cfd.jpg",
        category: "gathering"
    }
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
        event.category === "competition"),
    gathering: calendarEvents.filter(event => 
        event.category === "gathering"),
    workshop: []
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
  id, title, location, date, imageUrl, category 
}) => {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}_${id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl shadow-md">
      <div className="w-full sm:w-1/2 h-64 sm:h-48 overflow-hidden rounded-xl relative">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-top"
          width={500}
          height={150}
        />
        <button
          onClick={handleDownload}
          className="absolute bottom-2 right-2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white text-xs px-3 py-1 rounded-full transition-all duration-200 flex items-center gap-1"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          See More
        </button>
      </div>
      <div className="flex flex-col justify-between p-4 bg-[#1C74BC] rounded-xl text-white w-full sm:w-1/2">
        <div>
          <span className="bg-white text-[#1C74BC] text-xs font-semibold px-2 py-1 rounded-md mb-2 inline-block capitalize">
            {category || "Event"}
          </span>
          <h3 className="text-lg font-semibold leading-tight mb-2">
            {title}
          </h3>
        </div>
        <div className="text-sm space-y-1">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2C6.13 2 3 5.13 3 9c0 4.42 6.34 9.55 6.59 9.74.27.2.64.2.91 0C10.66 18.55 17 13.42 17 9c0-3.87-3.13-7-7-7zM5 9a5 5 0 1110 0c0 2.93-4.12 6.86-5 7.54C9.12 15.86 5 11.93 5 9z" />
              <path d="M10 11a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
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

