import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Stethoscope } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description:
        "Priorizamos o bem-estar e conforto de cada paciente com atenção personalizada e acolhedora.",
    },
    {
      icon: Award,
      title: "Excelência Médica",
      description:
        "Equipe altamente qualificada e atualizada com as melhores práticas e tecnologias médicas.",
    },
    {
      icon: Users,
      title: "Compromisso",
      description:
        "Dedicação total à saúde e qualidade de vida de nossos pacientes e suas famílias.",
    },
    {
      icon: Stethoscope,
      title: "Tecnologia Avançada",
      description:
        "Infraestrutura moderna com equipamentos de última geração para diagnósticos precisos.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-brown-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
            Sobre a Kuehne Clínica Médica
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Há anos dedicados à excelência em cuidados de saúde, a Kuehne
            Clínica Médica representa o compromisso com a saúde e bem-estar de
            nossa comunidade.
          </p>
        </div>

        {/* Image and Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80"
              alt="Modern medical clinic interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-brown-800">
              Nossa Missão
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Proporcionar cuidados de saúde de excelência, combinando
              conhecimento médico avançado com um atendimento humanizado e
              acolhedor. Nosso compromisso é com a saúde integral de cada
              paciente, oferecendo soluções médicas personalizadas e eficazes.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Acreditamos que a medicina vai além do tratamento de doenças - é
              sobre prevenção, educação e cuidado contínuo para garantir uma
              vida saudável e plena.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-brown-800 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="border-brown-200 hover:shadow-lg transition-shadow duration-300 hover:border-gold-400"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-brown-100 rounded-full">
                        <Icon className="h-8 w-8 text-brown-700" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-brown-800 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

