import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-content";

interface GoogleMapsLocationProps {
  title: string;
  directionsLabel: string;
  mapClassName?: string;
  showDirections?: boolean;
  grayscale?: boolean;
}

export function GoogleMapsLocation({
  title,
  directionsLabel,
  mapClassName = "h-[360px]",
  showDirections = true,
  grayscale = false,
}: GoogleMapsLocationProps) {
  const coordinates = `${SITE_CONFIG.googleMapsLocation.latitude},${SITE_CONFIG.googleMapsLocation.longitude}`;
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(coordinates)}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coordinates)}`;

  return (
    <div className="w-full min-w-0">
      <div className={`relative w-full overflow-hidden rounded-sm border border-[#E3E8EC] bg-[#EEF5F8] ${mapClassName}`}>
        <iframe
          title={title}
          src={mapUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className={`absolute inset-0 h-full w-full border-0 ${grayscale ? "grayscale" : ""}`}
        />
      </div>
      {showDirections && <div className="mt-4 flex justify-start">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold text-sm px-5 sm:px-6 py-3 rounded-xs transition-colors shadow-xs active:scale-[0.99]"
        >
          {directionsLabel}
          <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
        </a>
      </div>}
    </div>
  );
}
