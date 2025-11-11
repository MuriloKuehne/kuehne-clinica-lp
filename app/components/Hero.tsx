"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80"
          alt="Modern medical clinic"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 via-brown-800/70 to-brown-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Excelência em
            <span className="block text-gold-400 mt-2">
              Cuidados de Saúde
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Na Kuehne Clínica Médica, oferecemos cuidados de saúde de
            excelência com uma equipe médica especializada e moderna
            infraestrutura para seu bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() => scrollToSection("appointment")}
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold text-lg px-8 py-6 h-auto group"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto"
            >
              Conheça Nossa Clínica
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

