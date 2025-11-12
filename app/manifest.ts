import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kuehne Clínica Médica',
    short_name: 'Kuehne Clínica',
    description: 'Excelência em Cuidados de Saúde',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/logo-2.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}

