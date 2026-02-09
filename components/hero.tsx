"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="accueil"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Video background placeholder */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/paris-1889.jpg"
          className="h-full w-full object-cover"
        >
          {/* Replace src with your actual video file */}
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <p className="text-xs tracking-[0.35em] uppercase text-primary mb-6 animate-fade-in">
          Agence de voyage temporel de luxe
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight text-foreground text-balance">
          Voyagez dans le temps avec elegance
        </h1>
        <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
          {"Explorez les plus belles epoques de l'histoire avec un service d'exception. Chaque voyage est une experience unique, sur mesure."}
        </p>
        <a
          href="#destinations"
          className="mt-10 inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-all duration-300"
        >
          Decouvrir les destinations
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  )
}
