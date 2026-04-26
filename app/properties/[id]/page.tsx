import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bed, Bath, Maximize2, MapPin, Tag, CheckCircle, Phone, Mail, ArrowLeft, Share2 } from "lucide-react";
import { getById, properties } from "@/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const property = getById(id);
  if (!property) return {};
  return {
    title: `${property.title} | ATECONE Real Estate`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = getById(id);
  if (!property) notFound();

  const formattedPrice =
    property.listing === "For Rent"
      ? `$${property.price.toLocaleString()}/${property.period}`
      : `$${property.price.toLocaleString()}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-green-700 transition-colors">Properties</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium line-clamp-1">{property.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT COLUMN */}
          <div className="flex-1 min-w-0">
            {/* Back Button */}
            <Link href="/properties" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-700 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Listings
            </Link>

            {/* Main Image */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-4">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`text-sm font-bold px-3 py-1.5 rounded-full ${
                  property.listing === "For Sale" ? "bg-green-700 text-white" : "bg-amber-500 text-white"
                }`}>
                  {property.listing}
                </span>
                <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-white/90 text-gray-700">
                  {property.type}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {property.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3 mb-8">
                {property.images.slice(1).map((img, i) => (
                  <div key={i} className="relative h-28 rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${property.title} view ${i + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="200px"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Title & Location */}
            <div className="bg-white rounded-2xl p-7 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{property.title}</h1>
                <button className="flex items-center gap-2 text-gray-500 hover:text-green-700 text-sm transition-colors flex-shrink-0">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mb-5">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>{property.location}, {property.district} District</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5 text-green-700" />
                <span className="text-3xl font-bold text-green-700">{formattedPrice}</span>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 pt-5 border-t border-gray-100">
                {property.bedrooms && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bed className="w-5 h-5 text-green-700" />
                    <span className="font-semibold">{property.bedrooms}</span>
                    <span className="text-sm">Bedrooms</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bath className="w-5 h-5 text-green-700" />
                    <span className="font-semibold">{property.bathrooms}</span>
                    <span className="text-sm">Bathrooms</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-600">
                  <Maximize2 className="w-5 h-5 text-green-700" />
                  <span className="font-semibold">{property.area}</span>
                  <span className="text-sm">m²</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-7 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About this Property</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Key Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Contact Card */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-28 space-y-5">
              {/* Agent Card */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80"
                      alt="Agent"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Jean-Pierre Mugisha</p>
                    <p className="text-sm text-gray-500">Senior Property Agent</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4,5].map(s => (
                        <div key={s} className="w-3 h-3 rounded-full bg-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-4">Enquire About This Property</h3>

                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500"
                  />
                  <textarea
                    rows={3}
                    placeholder={`I'm interested in "${property.title}". Please contact me with more details.`}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-3.5 rounded-xl font-semibold text-sm transition-colors"
                  >
                    Send Enquiry
                  </button>
                </form>

                <div className="flex flex-col gap-3 mt-5 pt-5 border-t border-gray-100">
                  <a href="tel:+250788000000" className="flex items-center gap-3 text-sm text-gray-600 hover:text-green-700 transition-colors">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                      <Phone className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">+250 788 000 000</p>
                      <p className="text-xs text-gray-400">Call agent directly</p>
                    </div>
                  </a>
                  <a href="mailto:info@atecone.rw" className="flex items-center gap-3 text-sm text-gray-600 hover:text-green-700 transition-colors">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                      <Mail className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">info@atecone.rw</p>
                      <p className="text-xs text-gray-400">Send us an email</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-52 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-green-700 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{property.location}</p>
                    <p className="text-xs text-gray-500">{property.district} District, Rwanda</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 text-center">
                    Exact address provided upon confirmed viewing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
