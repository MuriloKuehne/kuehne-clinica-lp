import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function MedicalTeam() {
  return (
    <section
      id="team"
      className="py-20 sm:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-dark mb-4">
            Nossos Fundadores
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Dr. Aldo Tardiole Kuehne */}
          <Card className="border-grey overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-float">
            <div className="flex flex-col lg:flex-row">
              {/* Photo */}
              <div className="relative w-full lg:w-80 h-80 lg:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
                  alt="Dr. Aldo Tardiole Kuehne"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <CardContent className="p-6 lg:p-8 flex flex-col justify-center group-hover:bg-gradient-to-br from-white to-brown-dark/5 transition-colors duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold text-brown-dark mb-2 group-hover:text-brown-dark transition-colors duration-300">
                  Dr. Aldo Tardiole Kuehne
                </h3>
                <p className="text-gold font-semibold mb-4 text-lg group-hover:scale-105 transition-transform duration-300 inline-block">
                  Fundador e Diretor da Clínica
                </p>
                <div className="mb-4">
                  <p className="text-brown-dark font-medium mb-2">
                    Especialidades:
                  </p>
                  <ul className="list-disc list-inside text-brown-dark space-y-1">
                    <li className="group-hover:translate-x-1 transition-transform duration-300">Clínico Geral</li>
                    <li className="group-hover:translate-x-1 transition-transform duration-300 delay-75">Gastroenterologista</li>
                    <li className="group-hover:translate-x-1 transition-transform duration-300 delay-150">Cirurgião Geral</li>
                  </ul>
                </div>
                <p className="text-brown-dark leading-relaxed group-hover:text-brown-dark/90 transition-colors duration-300">
                  Um dos médicos mais respeitados da região, o Dr. Aldo Tardiole Kuehne é reconhecido por sua ética exemplar e vasto conhecimento médico. Como fundador e diretor da clínica, dedica-se a proporcionar cuidados médicos de excelência, sempre priorizando o bem-estar e a saúde de seus pacientes.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Dra. Ana Karina Ferraz do Amaral Kuehne */}
          <Card className="border-grey overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-float">
            <div className="flex flex-col lg:flex-row">
              {/* Photo */}
              <div className="relative w-full lg:w-80 h-80 lg:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                  alt="Dra. Ana Karina Ferraz do Amaral Kuehne"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <CardContent className="p-6 lg:p-8 flex flex-col justify-center group-hover:bg-gradient-to-br from-white to-brown-dark/5 transition-colors duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold text-brown-dark mb-2 group-hover:text-brown-dark transition-colors duration-300">
                  Dra. Ana Karina Ferraz do Amaral Kuehne
                </h3>
                <p className="text-gold font-semibold mb-4 text-lg group-hover:scale-105 transition-transform duration-300 inline-block">
                  Fundadora e Dermatologista
                </p>
                <div className="mb-4">
                  <p className="text-brown-dark font-medium mb-2">
                    Especialidade:
                  </p>
                  <ul className="list-disc list-inside text-brown-dark space-y-1">
                    <li className="group-hover:translate-x-1 transition-transform duration-300">Dermatologista</li>
                  </ul>
                </div>
                <p className="text-brown-dark leading-relaxed group-hover:text-brown-dark/90 transition-colors duration-300">
                  Muito conhecida por ser a melhor dermatologista e sempre estar atualizada com o melhor que as ciências médicas tem para oferecer. A Dra. Ana Karina dedica-se a proporcionar tratamentos dermatológicos de excelência, combinando conhecimento científico avançado com cuidado humanizado.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

