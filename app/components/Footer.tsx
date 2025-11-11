"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-brown-dark text-grey-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gold">
              Kuehne Clínica Médica
            </h3>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-brown rounded-full hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-brown rounded-full hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-brown rounded-full hover:bg-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-grey-light hover:text-gold transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-grey-light hover:text-gold transition-colors"
                >
                  Nossa Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-grey-light hover:text-gold transition-colors"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("appointment")}
                  className="text-grey-light hover:text-gold transition-colors"
                >
                  Agendar Consulta
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">
              Especialidades
            </h4>
            <ul className="space-y-2 text-grey-light">
              <li>Clínica Geral</li>
              <li>Cardiologia</li>
              <li>Ortopedia</li>
              <li>Pediatria</li>
              <li>Dermatologia</li>
              <li>Ginecologia</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-grey-light text-sm">
                  296, R. Sete de Setembro, 264
                  <br />
                  Machado - MG, 37750-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href="tel:3532957558"
                  className="text-grey-light hover:text-gold transition-colors"
                >
                  (35) 3295-7558
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:contato@kuehneclinica.com.br"
                  className="text-grey-light hover:text-gold transition-colors text-sm break-all"
                >
                  contato@kuehneclinica.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-grey-dark text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Kuehne Clínica Médica. Todos os
              direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-grey-dark">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-gold transition-colors"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-gold transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

