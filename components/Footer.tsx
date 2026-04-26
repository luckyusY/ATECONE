import Link from "next/link";
import { Home, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">ATECONE</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Rwanda&apos;s trusted real estate partner. We connect people with their dream properties across Kigali and beyond.
            </p>
            <div className="flex gap-3">
              {["Facebook", "X / Twitter", "Instagram", "LinkedIn"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "All Properties" },
                { href: "/properties?listing=For+Sale", label: "Properties for Sale" },
                { href: "/properties?listing=For+Rent", label: "Properties for Rent" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2 text-sm">
              {["Villas", "Apartments", "Family Homes", "Duplexes", "Land", "Commercial"].map((t) => (
                <li key={t}>
                  <Link href="/properties" className="hover:text-amber-400 transition-colors">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <span>KG 11 Ave, Kiyovu<br />Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+250788000000" className="hover:text-amber-400 transition-colors">
                  +250 788 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@atecone.rw" className="hover:text-amber-400 transition-colors">
                  info@atecone.rw
                </a>
              </li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              Mon – Fri: 8:00 AM – 6:00 PM<br />
              Sat: 9:00 AM – 3:00 PM
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ATECONE Real Estate Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
