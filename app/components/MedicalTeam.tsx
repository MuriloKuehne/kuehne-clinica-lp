import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Dr. Carlos Kuehne",
    title: "Diretor Médico",
    specialization: "Clínica Geral",
    bio: "Mais de 20 anos de experiência em medicina clínica, com foco em prevenção e tratamento personalizado.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Dra. Ana Silva",
    title: "Cardiologista",
    specialization: "Cardiologia",
    bio: "Especialista em doenças cardiovasculares e prevenção, com formação em renomadas instituições.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Dr. Roberto Mendes",
    title: "Ortopedista",
    specialization: "Ortopedia e Traumatologia",
    bio: "Expert em cirurgias ortopédicas e tratamento de lesões esportivas, com vasta experiência clínica.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
  },
  {
    name: "Dra. Maria Santos",
    title: "Pediatra",
    specialization: "Pediatria",
    bio: "Dedicada ao cuidado infantil com abordagem humanizada e atenção especial ao desenvolvimento.",
    image: "https://images.unsplash.com/photo-1594824476966-48f8c53f3c9e?w=400&q=80",
  },
  {
    name: "Dr. Paulo Costa",
    title: "Dermatologista",
    specialization: "Dermatologia",
    bio: "Especialista em doenças de pele, estética e tratamentos dermatológicos avançados.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
  },
  {
    name: "Dra. Juliana Alves",
    title: "Ginecologista",
    specialization: "Ginecologia e Obstetrícia",
    bio: "Cuidados especializados em saúde da mulher, com foco em prevenção e bem-estar integral.",
    image: "https://images.unsplash.com/photo-1551601651-0a5c4c3269f9?w=400&q=80",
  },
]

export default function MedicalTeam() {
  return (
    <section
      id="team"
      className="py-20 sm:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
            Nossa Equipe Médica
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Uma equipe de profissionais altamente qualificados e dedicados ao
            seu bem-estar e saúde.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-brown-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brown-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-600 font-semibold mb-2">
                  {member.title}
                </p>
                <p className="text-brown-600 text-sm mb-3 font-medium">
                  {member.specialization}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

