"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Destinations", href: "#destinations" },
  { label: "Approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#accueil" className="flex items-center gap-2">
          <span className="text-primary font-serif text-2xl font-bold tracking-wide">
            Chronos
          </span>
          <span className="text-muted-foreground text-xs tracking-widest uppercase hidden sm:inline">
            Voyages Temporels
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#destinations"
          className="hidden md:inline-flex items-center px-6 py-2.5 border border-primary/40 text-primary text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Reserver
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#destinations"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center px-6 py-2.5 border border-primary/40 text-primary text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Reserver
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
