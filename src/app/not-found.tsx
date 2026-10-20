import React from "react";
import Link from "next/link";
import { Compass, Home, CalendarCheck, Phone, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="bg-ivory min-h-[75vh] flex items-center justify-center py-20">
      <Container size="narrow">
        <div className="bg-white p-8 sm:p-14 rounded-2xl border border-beige/80 text-center shadow-lg space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-leaf text-xs font-semibold tracking-widest uppercase">
            <span>ERROR 404 · PAGE NOT LOCATED</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl font-normal text-forest tracking-tight">
            Nature Follows Its Course.{" "}
            <span className="italic font-light text-gold">
              This Page Has Moved.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-dark-muted max-w-lg mx-auto leading-relaxed">
            The page or clinical resource you were looking for is no longer at
            this web address. Please explore our hospital services or return to
            the homepage.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-forest hover:bg-botanical text-ivory text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <Home className="w-4 h-4 text-gold-light" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-white hover:bg-ivory text-forest border border-beige text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Compass className="w-4 h-4 text-gold" />
              <span>Explore Treatments</span>
            </Link>

            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-gold hover:bg-gold-dark text-botanical text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
