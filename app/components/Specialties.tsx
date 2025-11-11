import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Brain,
  Baby,
  Bone,
  Eye,
  Activity,
  Stethoscope,
  Microscope,
} from "lucide-react"

const specialties = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description:
      "Atendimento médico completo para toda a família, com foco em prevenção, diagnóstico e tratamento de doenças comuns.",
  },
  {
    icon: Heart,
    title: "Cardiologia",
    description:
      "Cuidados especializados do coração e sistema cardiovascular, incluindo exames preventivos e tratamento de doenças cardíacas.",
  },
  {
    icon: Bone,
    title: "Ortopedia",
    description:
      "Tratamento de lesões musculoesqueléticas, fraturas, problemas articulares e cirurgias ortopédicas.",
  },
  {
    icon: Baby,
    title: "Pediatria",
    description:
      "Cuidados médicos especializados para bebês, crianças e adolescentes, com acompanhamento do desenvolvimento.",
  },
  {
    icon: Eye,
    title: "Dermatologia",
    description:
      "Diagnóstico e tratamento de doenças de pele, além de procedimentos estéticos e cuidados dermatológicos.",
  },
  {
    icon: Activity,
    title: "Ginecologia",
    description:
      "Saúde da mulher com foco em prevenção, exames ginecológicos e acompanhamento durante todas as fases da vida.",
  },
  {
    icon: Brain,
    title: "Neurologia",
    description:
      "Diagnóstico e tratamento de doenças do sistema nervoso, incluindo dores de cabeça, epilepsia e distúrbios neurológicos.",
  },
  {
    icon: Microscope,
    title: "Exames Laboratoriais",
    description:
      "Laboratório completo com exames de sangue, urina e outros testes diagnósticos para avaliação da saúde.",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
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
                  <CardTitle className="text-center text-brown-dark text-lg">
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
      </div>
    </section>
  )
}

