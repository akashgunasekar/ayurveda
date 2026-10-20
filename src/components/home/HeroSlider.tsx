"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  Compass,
  Sparkles,
} from "lucide-react";

interface HeroSlideData {
  id: string;
  eyebrow: string;
  headline: string;
  supporting: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageUrl: string;
  imageAlt: string;
}

const slides: HeroSlideData[] = [
  {
    id: "slide-1",
    eyebrow: "AYURKSHETRA · AUTHENTIC AYURVEDA CARE",
    headline: "Rediscover Balance. Reconnect With Nature.",
    supporting:
      "Explore personalised Ayurvedic care rooted in traditional wisdom and guided by experienced practitioners.",
    primaryCtaText: "Book a Consultation",
    primaryCtaLink: "/book-appointment",
    secondaryCtaText: "Explore Our Treatments",
    secondaryCtaLink: "/treatments",
    imageUrl:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Ayurvedic herbal oils, brass vessels and medicinal plants",
  },
  {
    id: "slide-2",
    eyebrow: "ABODE OF KERALIYA PANCHAKARMA",
    headline: "Time-Tested Purification For Mind & Body.",
    supporting:
      "Classical shodhana therapies supervised 24/7 by experienced physicians in Chennai's premier 36-bedded Ayurvedic hospital.",
    primaryCtaText: "View Panchakarma Therapies",
    primaryCtaLink: "/treatments",
    secondaryCtaText: "Meet Our Senior Doctors",
    secondaryCtaLink: "/doctors",
    imageUrl:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Authentic Keraliya Panchakarma treatment sanctuary",
  },
  {
    id: "slide-3",
    eyebrow: "27+ YEARS OF CLINICAL EXCELLENCE",
    headline: "Personalised Chikitsa Guided by 27 Years of Trust.",
    supporting:
      "Over 250,000 lives touched with individualized Prakriti assessments, chronic condition care, and classical medicine formulation.",
    primaryCtaText: "Consult Senior Physicians",
    primaryCtaLink: "/doctors",
    secondaryCtaText: "Our Healing Philosophy",
    secondaryCtaLink: "/about",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Peaceful Ayurvedic consultation and healing sanctuary",
  },
  {
    id: "slide-4",
    eyebrow: "IN-HOUSE HERBAL APOTHECARY & RESEARCH",
    headline: "Pure Classical Medicines, Crafted Without Compromise.",
    supporting:
      "Authentic herbal decoctions and classical formulations prepared in accordance with sacred Ayurvedic samhitas.",
    primaryCtaText: "Explore Hospital Facilities",
    primaryCtaLink: "/facilities",
    secondaryCtaText: "Read Ayurvedic Insights",
    secondaryCtaLink: "/blog",
    imageUrl:
      "https://images.unsplash.com/photo-1512290900672-1f55b9eb4713?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Traditional herbs, wooden bowls and natural ingredients",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className="relative w-full h-[88vh] min-h-[580px] max-h-[920px] lg:h-[94vh] bg-botanical overflow-hidden select-none"
      aria-label="Cinematic Ayurvedic Hospital Showcase"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1400}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide, index) => {
          const isCurrent = activeIndex === index;

          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
              {/* Background Image with Slow Subtle Zoom Scale (1.06 to 1.0) */}
              <div
                className={`absolute inset-0 w-full h-full transition-transform duration-[6500ms] ease-out ${
                  isCurrent ? "scale-100" : "scale-106"
                }`}
              >
                <Image
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Multi-layered cinematic gradient overlays for pristine readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-botanical/95 via-botanical/75 to-transparent lg:w-4/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical/90 via-transparent to-botanical/40" />

              {/* Slide Content */}
              <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-3xl pt-12 sm:pt-0">
                  <AnimatePresence mode="wait">
                    {isCurrent && (
                      <motion.div
                        key={slide.id}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.15,
                              delayChildren: 0.2,
                            },
                          },
                          exit: { opacity: 0, transition: { duration: 0.3 } },
                        }}
                      >
                        {/* Eyebrow */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                          }}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/80 border border-gold/40 text-gold-light text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-xs shadow-sm"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-gold" />
                          <span>{slide.eyebrow}</span>
                        </motion.div>

                        {/* Main Editorial Headline */}
                        <motion.h1
                          variants={{
                            hidden: { opacity: 0, y: 25 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                            },
                          }}
                          className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ivory tracking-tight leading-[1.08] drop-shadow-sm"
                        >
                          {slide.headline.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br className="hidden sm:inline" />
                            </React.Fragment>
                          ))}
                        </motion.h1>

                        {/* Supporting Copy */}
                        <motion.p
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                          }}
                          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-beige/90 leading-relaxed font-sans max-w-2xl font-light"
                        >
                          {slide.supporting}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                          }}
                          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
                        >
                          <Link
                            href={slide.primaryCtaLink}
                            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded bg-gold hover:bg-gold-dark text-botanical font-semibold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:text-ivory active:scale-95 group"
                          >
                            <CalendarCheck className="w-4.5 h-4.5" />
                            <span>{slide.primaryCtaText}</span>
                          </Link>

                          <Link
                            href={slide.secondaryCtaLink}
                            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded bg-transparent hover:bg-white/10 text-ivory border border-white/40 hover:border-gold/60 text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-xs active:scale-95"
                          >
                            <Compass className="w-4 h-4 text-gold-light" />
                            <span>{slide.secondaryCtaText}</span>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Progress Bar & Slide Count */}
          <div className="flex items-center gap-4">
            <div className="text-xs tracking-widest text-gold-light font-mono font-medium">
              0{activeIndex + 1} <span className="text-beige/40">/ 0{slides.length}</span>
            </div>

            {/* Visual Step Indicator */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === i
                      ? "w-8 sm:w-12 bg-gold"
                      : "w-2.5 sm:w-3.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-botanical/50 hover:bg-forest hover:border-gold/60 text-ivory flex items-center justify-center transition-all duration-200 backdrop-blur-xs active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-beige" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-botanical/50 hover:bg-forest hover:border-gold/60 text-ivory flex items-center justify-center transition-all duration-200 backdrop-blur-xs active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-beige" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
