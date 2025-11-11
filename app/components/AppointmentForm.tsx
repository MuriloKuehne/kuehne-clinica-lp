"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, CheckCircle2 } from "lucide-react"

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório"
    } else if (!/^[\d\s\(\)\-\+]+$/.test(formData.phone)) {
      newErrors.phone = "Telefone inválido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Placeholder submission - no backend
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        })
      }, 3000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section
      id="appointment"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-brown-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
              Agende Sua Consulta
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para confirmar seu agendamento.
            </p>
          </div>

          {/* Form */}
          <Card className="border-brown-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brown-800 text-center">
                Solicitar Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brown-800 mb-2">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe entrará em contato em breve para confirmar seu
                    agendamento.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-brown-800">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-red-500" : ""}
                        placeholder="Seu nome completo"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-brown-800">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-brown-800">
                        Telefone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : ""}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-brown-800">
                        Data Preferencial
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-brown-800">
                      Horário Preferencial
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brown-800">
                      Motivo da Consulta / Observações
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Descreva o motivo da consulta ou qualquer observação relevante..."
                      className="resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold text-lg py-6"
                  >
                    Enviar Solicitação
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

