export type PropertyType = "House" | "Apartment" | "Villa" | "Land" | "Duplex";
export type ListingType = "For Sale" | "For Rent";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  listing: ListingType;
  price: number;
  priceUnit: "USD" | "RWF";
  period?: "month" | "year";
  location: string;
  district: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  featured: boolean;
}
