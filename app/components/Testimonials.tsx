import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Oliveira",
    role: "Paciente",
    rating: 5,
    text: "Excelente atendimento! A equipe é muito profissional e acolhedora. Sinto-me sempre bem cuidada na Kuehne Clínica.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "João Silva",
    role: "Paciente",
    rating: 5,
    text: "Profissionais de altíssima qualidade. O Dr. Carlos sempre me atende com atenção e cuidado. Recomendo muito!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Ana Costa",
    role: "Paciente",
    rating: 5,
    text: "A melhor clínica da região! Infraestrutura moderna, médicos excelentes e um atendimento humanizado que faz toda a diferença.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Roberto Santos",
    role: "Paciente",
    rating: 5,
    text: "Há anos sou paciente da clínica e sempre recebo o melhor cuidado. Equipe competente e muito dedicada à saúde dos pacientes.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    name: "Patrícia Lima",
    role: "Paciente",
    rating: 5,
    text: "Levo minha família toda aqui. Os pediatras são excelentes com as crianças e sempre nos sentimos muito bem atendidos.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    name: "Carlos Mendes",
    role: "Paciente",
    rating: 5,
    text: "Clínica de referência! Profissionais atualizados, equipamentos modernos e um ambiente muito acolhedor. Recomendo!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-dark mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-grey hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-brown-dark leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-grey">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brown-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-brown-dark">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

