import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Stethoscope,
  Zap,
  Activity,
  Microscope,
  Scissors,
} from "lucide-react"

const specialties = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description:
      "Atendimento médico completo para toda a família, com foco em prevenção, diagnóstico e tratamento de doenças comuns.",
  },
  {
    icon: Zap,
    title: "Cirurgias Videolaparoscópicas",
    description:
      "Procedimentos cirúrgicos minimamente invasivos utilizando técnicas de videolaparoscopia para tratamentos precisos e recuperação mais rápida.",
  },
  {
    icon: Activity,
    title: "Colonoscopia",
    description:
      "Exame endoscópico do intestino grosso para diagnóstico, prevenção e tratamento de doenças do cólon e reto.",
  },
  {
    icon: Microscope,
    title: "Endoscopia",
    description:
      "Exame endoscópico do sistema digestivo superior para diagnóstico e tratamento de condições do esôfago, estômago e duodeno.",
  },
  {
    icon: Scissors,
    title: "Cirurgias Cutâneas",
    description:
      "Procedimentos cirúrgicos especializados para tratamento de lesões de pele, remoção de lesões benignas e malignas, e cirurgias dermatológicas.",
  },
]

export default function Specialties() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 lg:py-32 bg-grey-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-dark mb-4">
            Nossas Especialidades
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {/* Top row - 3 specialties */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.slice(0, 3).map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <Card
                  key={index}
                  className="border-grey hover:shadow-lg transition-all duration-300 hover:border-gold hover:-translate-y-1 group bg-white"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-grey-light rounded-full group-hover:bg-gold/20 transition-colors duration-300">
                        <Icon className="h-8 w-8 text-brown-dark group-hover:text-gold transition-colors duration-300" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-gold-dark text-lg">
                      {specialty.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brown-dark text-sm leading-relaxed text-center">
                      {specialty.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Bottom row - 2 specialties (larger, rectangular) */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {specialties.slice(3, 5).map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <Card
                  key={index + 3}
                  className="border-grey hover:shadow-lg transition-all duration-300 hover:border-gold hover:-translate-y-1 group bg-white lg:min-h-[200px]"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-grey-light rounded-full group-hover:bg-gold/20 transition-colors duration-300">
                        <Icon className="h-10 w-10 text-brown-dark group-hover:text-gold transition-colors duration-300" />
                      </div>
                    </div>
                    <CardTitle className="text-center text-gold-dark text-xl">
                      {specialty.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brown-dark text-base leading-relaxed text-center">
                      {specialty.description}
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

