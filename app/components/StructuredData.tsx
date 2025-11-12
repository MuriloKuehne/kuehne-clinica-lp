export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kuehneclinica.com.br'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "Kuehne Clínica Médica",
    "alternateName": "Kuehne Clínica",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.jpg`,
    "image": `${baseUrl}/logo.jpg`,
    "description": "Kuehne Clínica Médica oferece cuidados de saúde de excelência com uma equipe médica especializada e moderna infraestrutura.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Sete de Setembro, 264",
      "addressLocality": "Machado",
      "addressRegion": "MG",
      "postalCode": "37750-000",
      "addressCountry": "BR"
    },
    "telephone": "+553532957558",
    "email": "contato@kuehneclinica.com.br",
    "priceRange": "$$",
    "medicalSpecialty": [
      "Clínica Geral",
      "Cirurgia Geral",
      "Gastroenterologia",
      "Dermatologia"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Machado",
      "sameAs": "https://pt.wikipedia.org/wiki/Machado_(Minas_Gerais)"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

