"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import { ListingType, PropertyType } from "@/lib/types";

const listingTypes: ListingType[] = ["For Sale", "For Rent"];
const propertyTypes: PropertyType[] = ["House", "Apartment", "Villa", "Duplex", "Land"];
const districts = ["Gasabo", "Nyarugenge", "Kicukiro"];
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $100K", min: 0, max: 100000 },
  { label: "$100K – $200K", min: 100000, max: 200000 },
  { label: "$200K – $400K", min: 200000, max: 400000 },
  { label: "$400K+", min: 400000, max: Infinity },
  { label: "Under $1,000/mo", min: 0, max: 1000 },
  { label: "$1,000 – $2,000/mo", min: 1000, max: 2000 },
  { label: "$2,000+/mo", min: 2000, max: Infinity },
];

export default function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [listing, setListing] = useState<ListingType | "">("");
  const [type, setType] = useState<PropertyType | "">("");
  const [district, setDistrict] = useState("");
  const [priceIdx, setPriceIdx] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const range = priceRanges[priceIdx];
    return properties.filter((p) => {
      if (listing && p.listing !== listing) return false;
      if (type && p.type !== type) return false;
      if (district && p.district !== district) return false;
      if (p.price < range.min || p.price > range.max) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !p.title.toLowerCase().includes(q) &&
          !p.location.toLowerCase().includes(q) &&
          !p.district.toLowerCase().includes(q) &&
          !p.type.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [query, listing, type, district, priceIdx]);

  const clearFilters = () => {
    setQuery("");
    setListing("");
    setType("");
    setDistrict("");
    setPriceIdx(0);
  };

  const hasFilters = query || listing || type || district || priceIdx !== 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-green-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">All Properties</h1>
          <p className="text-green-200">Browse our full portfolio of properties across Rwanda</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search + Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-8 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by location, title, type…"
              className="w-full bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-colors ${
              showFilters ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {hasFilters && <span className="bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">!</span>}
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Listing Type</label>
                <select
                  value={listing}
                  onChange={(e) => setListing(e.target.value as ListingType | "")}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-500"
                >
                  <option value="">All Listings</option>
                  {listingTypes.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as PropertyType | "")}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-500"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-500"
                >
                  <option value="">All Districts</option>
                  {districts.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={priceIdx}
                  onChange={(e) => setPriceIdx(Number(e.target.value))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-500"
                >
                  {priceRanges.map((r, i) => <option key={i} value={i}>{r.label}</option>)}
                </select>
              </div>
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 flex items-center gap-2 text-sm text-red-500 hover:text-red-700 transition-colors"
              >
                <X className="w-4 h-4" /> Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">
            <span className="font-bold text-gray-900">{filtered.length}</span> {filtered.length === 1 ? "property" : "properties"} found
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search filters to see more results.</p>
            <button onClick={clearFilters} className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
