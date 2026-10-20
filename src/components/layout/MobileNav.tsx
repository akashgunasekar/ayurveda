"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Phone,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { hospitalInfo } from "@/lib/content";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Hospital", href: "/about" },
    { name: "Panchakarma & Treatments", href: "/treatments" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Hospital Facilities", href: "/facilities" },
    { name: "Educational Blog", href: "/blog" },
    { name: "Contact & Route", href: "/contact" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-botanical/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-botanical text-ivory border-l border-gold/30 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between pb-6 border-b border-forest/80">
            <div>
              <span className="font-editorial text-2xl font-semibold tracking-wide text-ivory">
                AYURKSHETRA
              </span>
              <p className="text-[11px] text-gold-light tracking-widest uppercase">
                Ayurveda Hospital Chennai
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-forest/80 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "bg-forest text-gold-light font-semibold"
                          : "text-beige/90 hover:bg-forest/50 hover:text-ivory"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-8 pt-6 border-t border-forest/80 space-y-4">
            <Link
              href="/book-appointment"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-sm transition-all shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${hospitalInfo.contact.primaryPhone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-forest/70 border border-forest hover:border-gold/40 text-ivory transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-light" />
                <span>Call Hospital</span>
              </a>

              <a
                href={`https://wa.me/${hospitalInfo.contact.whatsapp.replace("+", "")}?text=Hello%20Ayurkshetra,%20I%20would%20like%20to%20enquire%20about%20a%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-ivory transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-forest/40 border-t border-forest/80 text-xs text-beige/80 space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span>Arumbakkam, Chennai (Near Koyambedu & Anna Nagar)</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold shrink-0" />
            <span>OPD: 8 AM – 8 PM · 24/7 Inpatient Care</span>
          </div>
          <div className="flex items-center gap-2 pt-2 text-[11px] text-gold-light">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>36-Bedded Full Fledged Ayurvedic Hospital</span>
          </div>
        </div>
      </div>
    </div>
  );
}
