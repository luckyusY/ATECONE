import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Home, Building2, TrendingUp, Shield, Star, ArrowRight, Phone, CheckCircle } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { getFeatured } from "@/lib/data";

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "10+", label: "Years in Rwanda" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Home,
    title: "Property Sales",
    desc: "Find your perfect home from our extensive portfolio of houses, villas, and apartments for sale across Rwanda.",
  },
  {
    icon: Building2,
    title: "Property Rentals",
    desc: "Browse short-term and long-term rental options in all major Kigali neighbourhoods at competitive prices.",
  },
  {
    icon: TrendingUp,
    title: "Property Investment",
    desc: "Our experts guide you through Rwanda's booming real estate market to maximise your investment returns.",
  },
  {
    icon: Shield,
    title: "Legal & Advisory",
    desc: "We handle all documentation, title deeds, and legal formalities so your transaction is safe and seamless.",
  },
];

const testimonials = [
  {
    name: "Grace Uwimana",
    role: "Homeowner, Kiyovu",
    text: "ATECONE made buying my first home in Kigali effortless. Their team was professional, transparent, and guided me every step of the way. I couldn't be happier!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",
  },
  {
    name: "Patrick Ndagijimana",
    role: "Property Investor",
    text: "I've worked with several agents in Kigali and ATECONE stands out. They have unmatched market knowledge and always find the right deal. Highly recommended.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Expat, Kimihurura",
    text: "As an expat relocating to Rwanda, ATECONE made finding a rental apartment simple and stress-free. They understood exactly what I needed and delivered.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  },
];

const districts = ["Gasabo", "Nyarugenge", "Kicukiro", "Huye", "Musanze", "Rubavu"];

export default function HomePage() {
  const featured = getFeatured();

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85"
          alt="Luxury home in Kigali"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Based in Kigali, Rwanda</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Find Your Dream
            <span className="block text-amber-400">Property in Rwanda</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            ATECONE connects you with the finest homes, villas, and apartments for sale and rent across Kigali and Rwanda.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search by location, property type…"
                  className="w-full bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm"
                />
              </div>
              <select className="bg-gray-50 text-gray-700 rounded-xl px-4 py-3 text-sm outline-none border-0">
                <option>All Types</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
              <Link
                href="/properties"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs text-gray-500 font-medium mr-1">Popular:</span>
              {["Nyarutarama", "Kiyovu", "Kimihurura", "Remera", "Gisozi"].map((loc) => (
                <Link
                  key={loc}
                  href={`/properties?q=${loc}`}
                  className="text-xs bg-green-50 text-green-700 hover:bg-green-100 px-3 py-1 rounded-full transition-colors"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2">Hand-picked</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Properties</h2>
              <p className="text-gray-500 mt-2 max-w-md">
                Our top picks — selected for quality, location, and value in Rwanda&apos;s prime neighbourhoods.
              </p>
            </div>
            <Link
              href="/properties"
              className="flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors flex-shrink-0"
            >
              View All Listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSE BY DISTRICT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2">Explore</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Browse by District</h2>
            <p className="text-gray-500 mt-2">Find properties in Rwanda&apos;s most sought-after locations</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {districts.map((district, i) => (
              <Link
                key={district}
                href={`/properties?district=${district}`}
                className="group relative h-40 rounded-2xl overflow-hidden"
              >
                <Image
                  src={`https://images.unsplash.com/photo-${
                    ["1600596542815-ffad4c1539a9", "1613490493576-7fde63acd811", "1568605114967-8130f3a36994",
                     "1580587771525-78b9dba3b914", "1564013799919-ab600027ffc6", "1570129477492-45c003edd2be"][i]
                  }?w=400&q=70`}
                  alt={district}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm">{district}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ATECONE ── */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-2">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Rwanda&apos;s Trusted Real Estate Partner</h2>
            <p className="text-green-200 mt-3 max-w-xl mx-auto">
              With over 10 years of experience, ATECONE has built a reputation for integrity, expertise, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-green-800 group-hover:bg-amber-500 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 pt-12 border-t border-green-800">
            {[
              { label: "Licensed & regulated real estate agency in Rwanda" },
              { label: "Transparent pricing with no hidden fees" },
              { label: "End-to-end support from search to handover" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-green-800 to-green-700 rounded-3xl overflow-hidden p-10 sm:p-14 text-white text-center">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=60"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
              <p className="text-green-100 mb-8 max-w-xl mx-auto">
                Whether you&apos;re buying, selling, or renting — our team of experts is ready to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/properties"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  Browse Properties
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
