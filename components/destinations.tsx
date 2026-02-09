"use client"

import Image from "next/image"
import { ArrowRight, Clock, MapPin, Star } from "lucide-react"
import { useRef, useEffect, useState } from "react"

interface Destination {
  title: string
  epoch: string
  description: string
  image: string
  date: string
  rating: number
  price: string
}

const destinations: Destination[] = [
  {
    title: "Paris 1889",
    epoch: "Belle Epoque",
    description:
      "Assistez a l'inauguration de la Tour Eiffel lors de l'Exposition universelle. Un moment de gloire et d'innovation.",
    image: "/images/paris-1889.jpg",
    date: "31 Mars 1889",
    rating: 4.9,
    price: "12 800",
  },
  {
    title: "Cretace -65M",
    epoch: "Ere Mesozoique",
    description:
      "Observez les derniers dinosaures dans leur habitat naturel, juste avant le grand impact. Sensations garanties.",
    image: "/images/cretaceous.jpg",
    date: "Il y a 65 millions d'annees",
    rating: 5.0,
    price: "45 000",
  },
  {
    title: "Florence 1504",
    epoch: "Renaissance Italienne",
    description:
      "Rencontrez Leonard de Vinci et Michel-Ange dans l'atelier ou fut creee le David. L'art a l'etat pur.",
    image: "/images/florence-1504.jpg",
    date: "8 Septembre 1504",
    rating: 4.8,
    price: "9 500",
  },
]

function DestinationCard({ destination, index }: { destination: Destination; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden border border-border/50 bg-card transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
        {/* Epoch badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border/50">
          <span className="text-[10px] tracking-widest uppercase text-primary">
            {destination.epoch}
          </span>
        </div>
        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm border border-border/50">
          <Star className="h-3 w-3 text-primary fill-primary" />
          <span className="text-xs text-foreground">{destination.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {destination.title}
        </h3>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs">{destination.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-xs">{destination.title.split(" ")[0]}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {destination.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground block">A partir de</span>
            <span className="text-xl font-serif text-primary">
              {destination.price} {""}
            </span>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 border border-primary/40 text-primary text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
          >
            Explorer
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Hover glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}

export function Destinations() {
  return (
    <section id="destinations" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-4">
            Nos Destinations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground text-balance">
            Choisissez votre epoque
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {"Trois voyages d'exception vers les moments les plus fascinants de l'histoire."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.title} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
