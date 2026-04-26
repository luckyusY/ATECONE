import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, Tag } from "lucide-react";
import { Property } from "@/lib/types";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  const formattedPrice =
    property.listing === "For Rent"
      ? `$${property.price.toLocaleString()}/${property.period}`
      : `$${property.price.toLocaleString()}`;

  return (
    <Link href={`/properties/${property.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              property.listing === "For Sale"
                ? "bg-green-700 text-white"
                : "bg-amber-500 text-white"
            }`}
          >
            {property.listing}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-gray-700">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-green-700 transition-colors line-clamp-1">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-amber-500" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-4 h-4 text-green-700" />
          <span className="text-xl font-bold text-green-700">{formattedPrice}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
          {property.bedrooms && (
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 ml-auto">
            <Maximize2 className="w-4 h-4" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
