import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Location() {
  const address = "296, R. Sete de Setembro, 264, Machado - MG, 37750-000"
  const phone = "(35) 3295-7558"
  const email = "contato@kuehneclinica.com.br"

  return (
    <section
      id="location"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/clinica-1.jpg"
          alt="Kuehne Clínica Médica"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-brown-dark/40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Localização e Contato
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1234567890123!2d-45.9191234!3d-21.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQwJzQ0LjAiUyA0NcKwNTUnMDguOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kuehne Clínica Médica Location"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-grey bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-grey-light rounded-full">
                    <MapPin className="h-6 w-6 text-brown-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-dark mb-2">
                      Endereço
                    </h3>
                    <p className="text-brown-dark leading-relaxed">{address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-grey bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-grey-light rounded-full">
                    <Phone className="h-6 w-6 text-brown-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-dark mb-2">
                      Telefone
                    </h3>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-brown-dark hover:text-gold transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-grey bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-grey-light rounded-full">
                    <Mail className="h-6 w-6 text-brown-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-dark mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-brown-dark hover:text-gold transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

