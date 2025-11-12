"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-grey-light/95 backdrop-blur-sm shadow-md"
          : "bg-grey-light/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto ">
          {/* Logo on the left */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center hover:opacity-80 transition-opacity -my-2 p-0"
          >
            <Image
              src="/logo-2.jpg"
              alt="Kuehne Clínica Médica Logo"
              width={160}
              height={160}
              className="object-contain rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 -my-1"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-brown-dark hover:text-gold font-medium text-lg transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-brown-dark hover:text-gold font-medium text-lg transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-brown-dark hover:text-gold font-medium text-lg transition-colors"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-brown-dark hover:text-gold font-medium text-lg transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("appointment")}
              className="bg-gold hover:bg-gold-dark text-brown-dark font-semibold text-lg"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-brown-dark" />
            ) : (
              <Menu className="h-6 w-6 text-brown-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-brown-dark hover:text-gold font-medium text-lg py-2 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-brown-dark hover:text-gold font-medium text-lg py-2 transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-brown-dark hover:text-gold font-medium text-lg py-2 transition-colors"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-brown-dark hover:text-gold font-medium text-lg py-2 transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("appointment")}
              className="w-full bg-gold hover:bg-gold-dark text-brown-dark font-semibold"
            >
              Agendar Consulta
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

