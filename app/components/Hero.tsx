"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const specialties = [
  {
    title: "Clínica Geral",
    description: "Atendimento médico completo para toda a família",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80",
  },
  {
    title: "Cirurgias Videolaparoscópicas",
    description: "Procedimentos cirúrgicos minimamente invasivos",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80",
  },
  {
    title: "Colonoscopia",
    description: "Exame endoscópico para diagnóstico e prevenção",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    title: "Endoscopia",
    description: "Exame endoscópico do sistema digestivo superior",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80",
  },
  {
    title: "Cirurgias Cutâneas",
    description: "Procedimentos cirúrgicos especializados para tratamento de lesões de pele",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&q=80",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % specialties.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + specialties.length) % specialties.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % specialties.length)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slider Container */}
      <div className="absolute inset-0 z-0">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={specialty.image}
              alt={specialty.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/85 via-brown/75 to-brown-dark/85" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Slide Content */}
          <div className="min-h-[400px] flex flex-col justify-center items-center">
            <div
              key={currentSlide}
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
                {specialties[currentSlide].title}
              </h1>
              <p className="text-2xl sm:text-3xl text-white/90 mb-8 max-w-2xl mx-auto">
                {specialties[currentSlide].description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                onClick={() => scrollToSection("appointment")}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-brown-dark font-semibold text-xl px-8 py-6 h-auto group"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {specialties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-gold"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

