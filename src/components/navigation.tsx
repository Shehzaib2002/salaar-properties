"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/about-us",   label: "About Us" },
  { href: "/projects",   label: "Projects" },
  { href: "/properties", label: "Properties" },
  { href: "/locations",  label: "Locations" },
  { href: "/insights",   label: "Insights" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const navBg =
    isScrolled || !isHome
      ? "bg-[#0b0f17]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl"
      : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-6 flex items-center justify-between max-w-[1400px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="p-1 rounded-xs bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-[#c5a880]/60 transition-colors">
            <Image
              src="/Salaar logo.png"
              alt="Salaar Properties"
              width={42}
              height={42}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-serif tracking-[0.22em] font-medium uppercase text-white leading-none">
              SALAAR
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#c5a880] font-sans font-semibold mt-1">
              PROPERTIES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`text-xs uppercase tracking-[0.18em] transition-all relative py-1 font-medium ${
                  isActive
                    ? "text-[#c5a880] font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#c5a880]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact-us"
            className="inline-block bg-[#c5a880] text-[#0b0f17] hover:bg-[#d8bb94] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-[#c5a880] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0b0f17] border-t border-white/10 shadow-2xl md:hidden">
          <div className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`py-3.5 text-sm uppercase tracking-widest font-medium border-b border-white/10 transition-colors ${
                    isActive ? "text-[#c5a880] font-semibold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact-us"
              className="mt-6 bg-[#c5a880] text-[#0b0f17] px-6 py-3.5 text-center text-xs uppercase font-semibold tracking-widest hover:bg-[#d8bb94] transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
