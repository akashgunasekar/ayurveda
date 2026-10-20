"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  CalendarCheck,
  Menu,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
import { hospitalInfo } from "@/lib/content";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Facilities", href: "/facilities" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Solid deep botanical green header background for 100% visibility, readability, and luxury aesthetic
  const headerBgClass = isScrolled
    ? "bg-[#0B2418] text-white border-b border-[#C5A45D]/30 shadow-xl backdrop-blur-md"
    : "bg-[#0B2418] text-white border-b border-[#173D25] shadow-md";

  return (
    <>
      {/* Top Slim Info Bar */}
      <div className="bg-[#071910] border-b border-[#173D25] text-xs text-white/90 py-2.5 hidden md:block select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${hospitalInfo.contact.primaryPhone}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#DFCA86] transition-colors duration-200 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFCA86]" />
              <span>{hospitalInfo.contact.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${hospitalInfo.contact.email}`}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#DFCA86] transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#DFCA86]" />
              <span>{hospitalInfo.contact.email}</span>
            </a>

            <div className="inline-flex items-center gap-1.5 text-[#E8DDC6]/90">
              <MapPin className="w-3.5 h-3.5 text-[#7E9F76]" />
              <span>Arumbakkam, Chennai · 36-Bed Hospital</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="inline-flex items-center gap-1.5 text-[#E8DDC6]/90">
              <Clock className="w-3.5 h-3.5 text-[#DFCA86]" />
              <span>OPD 8 AM – 8 PM · 24/7 Inpatient Care</span>
            </div>

            <a
              href={`https://wa.me/${hospitalInfo.contact.whatsapp.replace("+", "")}?text=Hello%20Ayurkshetra,%20I%20would%20like%20to%20consult%20an%20Ayurvedic%20doctor`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#45e681] font-semibold transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#C5A45D] rounded-sm p-1"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#C5A45D] bg-white shadow-md shrink-0">
                <Image
                  src="https://fplogoimages.withfloats.com/actual/69d3b5a09d53930e014ca0d7.jpeg"
                  alt="Ayurkshetra Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-wider text-white group-hover:text-[#DFCA86] transition-colors leading-none drop-shadow-xs">
                  AYURKSHETRA
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase text-[#DFCA86] leading-tight mt-1">
                  Hospital & Research Institute
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1.5 text-sm tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-[#DFCA86] font-bold"
                        : "text-white font-medium hover:text-[#DFCA86]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A45D] rounded-full shadow-xs" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/book-appointment"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#C5A45D] hover:bg-[#A4833E] text-[#0B2418] hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md active:scale-95"
              >
                <CalendarCheck className="w-4 h-4 text-[#0B2418] group-hover:text-white" />
                <span>Book Appointment</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-md text-white hover:text-[#DFCA86] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C5A45D]"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
