"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-surface/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        <Link href="/" className="text-xl font-bold tracking-widest uppercase text-brand">
          SALAAR
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about-us" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">About Us</Link>
          <Link href="/projects" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">Projects</Link>
          <Link href="/properties" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">Properties</Link>
          <Link href="/locations" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">Locations</Link>
          <Link href="/insights" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">Insights</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact-us" className="bg-brand text-brand-foreground px-6 py-2 text-sm font-medium hover:bg-brand/90 transition-colors">
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-t shadow-lg md:hidden">
          <div className="flex flex-col p-6 gap-4">
            <Link href="/about-us" className="text-lg font-medium text-brand">About Us</Link>
            <Link href="/projects" className="text-lg font-medium text-brand">Projects</Link>
            <Link href="/properties" className="text-lg font-medium text-brand">Properties</Link>
            <Link href="/locations" className="text-lg font-medium text-brand">Locations</Link>
            <Link href="/insights" className="text-lg font-medium text-brand">Insights</Link>
            <Link href="/contact-us" className="mt-4 bg-brand text-brand-foreground px-6 py-3 text-center text-sm font-medium hover:bg-brand/90 transition-colors">
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
