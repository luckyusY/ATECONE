"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight transition-colors ${
                scrolled || !isHome ? "text-green-800" : "text-white"
              }`}
            >
              ATECONE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-amber-500"
                    : scrolled || !isHome
                    ? "text-gray-700 hover:text-green-700"
                    : "text-white hover:text-amber-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+250788000000"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled || !isHome ? "text-gray-600 hover:text-green-700" : "text-white hover:text-amber-300"
              }`}
            >
              <Phone className="w-4 h-4" />
              +250 788 000 000
            </a>
            <Link
              href="/properties"
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              View Listings
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 font-medium ${
                  pathname === link.href ? "text-amber-500" : "text-gray-700 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/properties"
              onClick={() => setOpen(false)}
              className="block bg-amber-500 text-white text-center py-3 rounded-lg font-semibold mt-2"
            >
              View Listings
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
