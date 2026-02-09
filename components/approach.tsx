"use client"

import { Shield, Gem, Clock3 } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const features = [
  {
    icon: Shield,
    title: "Securite absolue",
    description:
      "Notre technologie de pointe garantit un retour en toute securite. Chaque voyage est supervise par une equipe d'experts temporels.",
  },
  {
    icon: Gem,
    title: "Service d'exception",
    description:
      "Un concierge dedie vous accompagne avant, pendant et apres votre voyage. Chaque detail est pense pour votre confort.",
  },
  {
    icon: Clock3,
    title: "Precision temporelle",
    description:
      "Arrivez a la seconde pres a l'evenement de votre choix. Notre precision de navigation est inegalee dans l'industrie.",
  },
]

export function Approach() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="approche" className="py-24 sm:py-32 px-6 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-4">
            Notre Approche
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground text-balance">
            {"L'excellence a chaque instant"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative p-8 border border-border/50 bg-card hover:border-primary/30 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="h-12 w-12 flex items-center justify-center border border-primary/30 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
