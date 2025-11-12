import { Card, CardContent } from "@/components/ui/card"

export default function MedicalTeam() {
  return (
    <section
      id="team"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-brown-dark/80 via-brown/70 to-brown-dark/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nossos Fundadores
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Dr. Aldo Tardiole Kuehne */}
          <Card className="border-grey overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-float">
            <div className="flex flex-col lg:flex-row">
              {/* Content */}
              <CardContent className="p-4 lg:p-6 flex flex-col justify-center group-hover:bg-gradient-to-br from-white to-brown-dark/5 transition-colors duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold text-brown-dark mb-2 group-hover:text-brown-dark transition-colors duration-300">
                  Dr. Aldo Tardiole Kuehne
                </h3>
                <p className="text-gold font-semibold mb-3 text-lg group-hover:scale-105 transition-transform duration-300 inline-block">
                  Fundador e Diretor da Clínica
                </p>
                <div className="mb-4">
                  <p className="text-brown-dark font-medium mb-2 text-lg">
                    Especialidades:
                  </p>
                  <ul className="list-disc list-inside text-brown-dark space-y-1 text-base">
                    <li className="group-hover:translate-x-1 transition-transform duration-300">Clínico Geral</li>
                    <li className="group-hover:translate-x-1 transition-transform duration-300 delay-75">Gastroenterologista</li>
                    <li className="group-hover:translate-x-1 transition-transform duration-300 delay-150">Cirurgião Geral</li>
                  </ul>
                </div>
                <p className="text-brown-dark leading-relaxed text-lg group-hover:text-brown-dark/90 transition-colors duration-300">
                  Um dos médicos mais respeitados da região, o Dr. Aldo Tardiole Kuehne é reconhecido por sua ética exemplar e vasto conhecimento médico. Como fundador e diretor da clínica, dedica-se a proporcionar cuidados médicos de excelência, sempre priorizando o bem-estar e a saúde de seus pacientes.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Dra. Ana Karina Ferraz do Amaral Kuehne */}
          <Card className="border-grey overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-float">
            <div className="flex flex-col lg:flex-row">
              {/* Content */}
              <CardContent className="p-4 lg:p-6 flex flex-col justify-center group-hover:bg-gradient-to-br from-white to-brown-dark/5 transition-colors duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold text-brown-dark mb-2 group-hover:text-brown-dark transition-colors duration-300">
                  Dra. Ana Karina Ferraz do Amaral Kuehne
                </h3>
                <p className="text-gold font-semibold mb-3 text-lg group-hover:scale-105 transition-transform duration-300 inline-block">
                  Fundadora e Dermatologista
                </p>
                <div className="mb-4">
                  <p className="text-brown-dark font-medium mb-2 text-lg">
                    Especialidade:
                  </p>
                  <ul className="list-disc list-inside text-brown-dark space-y-1 text-base">
                    <li className="group-hover:translate-x-1 transition-transform duration-300">Dermatologista</li>
                  </ul>
                </div>
                <p className="text-brown-dark leading-relaxed text-lg group-hover:text-brown-dark/90 transition-colors duration-300">
                  Muito conhecida por ser a melhor dermatologista e sempre estar atualizada com o melhor que as ciências médicas têm para oferecer. A Dra. Ana Karina dedica-se a proporcionar tratamentos dermatológicos de excelência, combinando conhecimento científico avançado com cuidado humanizado.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

