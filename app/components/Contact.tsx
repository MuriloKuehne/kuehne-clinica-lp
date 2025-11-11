"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const contactInfo = {
    phone: "(35) 3295-7558",
    email: "contato@kuehneclinica.com.br",
    address: "296, R. Sete de Setembro, 264, Machado - MG, 37750-000",
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-brown-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Estamos aqui para ajudar. Entre em contato conosco através dos
            canais abaixo ou agende sua consulta.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-brown-200 hover:shadow-lg transition-all duration-300 hover:border-gold-400 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-brown-100 rounded-full">
                  <Phone className="h-8 w-8 text-brown-700" />
                </div>
              </div>
              <h3 className="font-semibold text-brown-800 mb-2">Telefone</h3>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-gray-700 hover:text-brown-700 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </CardContent>
          </Card>

          <Card className="border-brown-200 hover:shadow-lg transition-all duration-300 hover:border-gold-400 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-brown-100 rounded-full">
                  <Mail className="h-8 w-8 text-brown-700" />
                </div>
              </div>
              <h3 className="font-semibold text-brown-800 mb-2">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-700 hover:text-brown-700 transition-colors break-all"
              >
                {contactInfo.email}
              </a>
            </CardContent>
          </Card>

          <Card className="border-brown-200 hover:shadow-lg transition-all duration-300 hover:border-gold-400 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-brown-100 rounded-full">
                  <MapPin className="h-8 w-8 text-brown-700" />
                </div>
              </div>
              <h3 className="font-semibold text-brown-800 mb-2">Endereço</h3>
              <p className="text-gray-700 text-sm">{contactInfo.address}</p>
            </CardContent>
          </Card>

          <Card className="border-brown-200 hover:shadow-lg transition-all duration-300 hover:border-gold-400 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-brown-100 rounded-full">
                  <Clock className="h-8 w-8 text-brown-700" />
                </div>
              </div>
              <h3 className="font-semibold text-brown-800 mb-2">Horário</h3>
              <p className="text-gray-700 text-sm">
                Seg-Sex: 8h-18h
                <br />
                Sáb: 8h-12h
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => scrollToSection("appointment")}
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold text-lg px-8 py-6"
          >
            Agendar Consulta Agora
          </Button>
        </div>
      </div>
    </section>
  )
}

