import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Award, TrendingUp, Heart } from "lucide-react";

const team = [
  {
    name: "Amina Uwase",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    bio: "15 years in Rwanda's real estate market. Built ATECONE from the ground up with a vision to bring transparency and trust to property transactions.",
  },
  {
    name: "Jean-Pierre Mugisha",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "A seasoned sales professional with deep knowledge of Kigali's premium residential market and over 300 successful transactions.",
  },
  {
    name: "Claudine Mukamana",
    role: "Rentals Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    bio: "Specialises in matching expatriates and professionals with the perfect rental properties across all of Kigali's key neighbourhoods.",
  },
  {
    name: "Eric Nzeyimana",
    role: "Legal & Compliance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Qualified Rwandan attorney ensuring every ATECONE transaction is legally sound, from title deed verification to contract finalisation.",
  },
];

const values = [
  { icon: Heart, title: "Client First", desc: "Every decision we make is guided by the best interests of our clients." },
  { icon: CheckCircle, title: "Integrity", desc: "We operate with complete transparency — no hidden fees, no surprises." },
  { icon: TrendingUp, title: "Excellence", desc: "We set the highest standards in service, presentation, and results." },
  { icon: Users, title: "Community", desc: "We're proud to contribute to Rwanda's growth and prosperity through housing." },
];

const milestones = [
  { year: "2014", event: "ATECONE founded in Kigali with 3 staff members" },
  { year: "2016", event: "Expanded to cover all three Kigali districts" },
  { year: "2018", event: "Reached 100 successful property transactions" },
  { year: "2020", event: "Launched online listings platform" },
  { year: "2022", event: "500+ properties sold or rented — 1,000 happy clients" },
  { year: "2024", event: "Expanded services to secondary cities: Musanze & Rubavu" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="ATECONE office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-green-900/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-3">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About ATECONE</h1>
          <p className="text-green-100 max-w-xl text-lg">
            Rwanda&apos;s leading real estate company — connecting people with properties since 2014.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Making Property Ownership Accessible to All Rwandans
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded in 2014, ATECONE was born from a simple belief: every Rwandan deserves a safe, transparent, and efficient way to find their perfect home. We set out to transform the real estate experience in Rwanda — removing friction, adding trust, and delivering results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, we are proud to be the most trusted real estate agency in Kigali, with a growing presence in secondary cities. Our team of licensed agents, legal experts, and property managers work every day to turn property dreams into reality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "500+", l: "Properties Sold" },
                  { n: "1,200+", l: "Happy Clients" },
                  { n: "10+", l: "Years of Experience" },
                  { n: "4", l: "Cities Covered" },
                ].map((s) => (
                  <div key={s.l} className="bg-green-50 rounded-2xl p-5">
                    <div className="text-3xl font-bold text-green-700 mb-1">{s.n}</div>
                    <div className="text-sm text-gray-600">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-80 lg:h-full min-h-80 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                alt="ATECONE property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2">The People Behind ATECONE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-green-100">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-amber-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-2">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold">10 Years of Growth</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-amber-400 font-bold">{m.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${i === milestones.length - 1 ? "bg-amber-400 border-amber-400" : "bg-green-700 border-green-400"}`} />
                  {i < milestones.length - 1 && <div className="w-0.5 h-8 bg-green-600 mt-1" />}
                </div>
                <div className="pt-0.5">
                  <p className="text-green-100">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Award className="w-12 h-12 text-amber-500 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-500 mb-8">Join over 1,200 satisfied clients who found their perfect property with ATECONE.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Browse Properties
            </Link>
            <Link href="/contact" className="border border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
