import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const offices = [
  {
    city: "Kigali – Head Office",
    address: "KG 11 Ave, Kiyovu, Nyarugenge District",
    phone: "+250 788 000 000",
    email: "info@atecone.rw",
    hours: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 3:00 PM",
  },
  {
    city: "Musanze Branch",
    address: "NR 1 Road, Musanze District",
    phone: "+250 788 000 001",
    email: "musanze@atecone.rw",
    hours: "Mon – Fri: 8:00 AM – 5:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-56 sm:h-72 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=75"
          alt="Contact ATECONE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-green-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-green-100 max-w-lg">Our team is ready to help you find your perfect property or answer any questions.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Send Us a Message</h2>
                    <p className="text-sm text-gray-500">We reply within 24 hours on business days.</p>
                  </div>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jean"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Uwimana"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+250 788 000 000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">I&apos;m interested in…</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500">
                      <option>Buying a Property</option>
                      <option>Renting a Property</option>
                      <option>Selling My Property</option>
                      <option>Property Valuation</option>
                      <option>Investment Advisory</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us how we can help you. Include any specific requirements, budget, or location preferences…"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold text-base transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.city} className="bg-white rounded-2xl p-7 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-5 pb-4 border-b border-gray-100">{office.city}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-green-700" />
                      </div>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-green-700" />
                      </div>
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-sm text-gray-600 hover:text-green-700 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-green-700" />
                      </div>
                      <a href={`mailto:${office.email}`} className="text-sm text-gray-600 hover:text-green-700 transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-green-700" />
                      </div>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div className="bg-green-700 rounded-2xl p-7 text-white text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Chat on WhatsApp</h3>
                <p className="text-green-200 text-sm mb-5">Get instant replies from our team on WhatsApp.</p>
                <a
                  href="https://wa.me/250788000000"
                  className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
