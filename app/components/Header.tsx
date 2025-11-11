"use client"

import { useState, useEffect } from "react"
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
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-brown-700 hover:text-brown-800 transition-colors"
            >
              Kuehne Clínica Médica
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-brown-700 font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-brown-700 font-medium transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-brown-700 font-medium transition-colors"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-brown-700 font-medium transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("appointment")}
              className="bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-brown-700" />
            ) : (
              <Menu className="h-6 w-6 text-brown-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-brown-700 font-medium py-2 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-gray-700 hover:text-brown-700 font-medium py-2 transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-brown-700 font-medium py-2 transition-colors"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-brown-700 font-medium py-2 transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("appointment")}
              className="w-full bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold"
            >
              Agendar Consulta
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

