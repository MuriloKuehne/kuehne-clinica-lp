import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kuehneclinica.com.br';

export const metadata: Metadata = {
  title: {
    default: "Kuehne Clínica Médica | Excelência em Cuidados de Saúde",
    template: "%s | Kuehne Clínica Médica"
  },
  description: "Kuehne Clínica Médica oferece cuidados de saúde de excelência com uma equipe médica especializada e moderna infraestrutura. Agende sua consulta hoje.",
  keywords: ["clínica médica", "machado mg", "consultas médicas", "cirurgias", "endoscopia", "colonoscopia", "clínica geral", "cirurgias videolaparoscópicas", "cirurgias cutâneas"],
  authors: [{ name: "Kuehne Clínica Médica" }],
  creator: "Kuehne Clínica Médica",
  publisher: "Kuehne Clínica Médica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Kuehne Clínica Médica',
    title: 'Kuehne Clínica Médica | Excelência em Cuidados de Saúde',
    description: 'Kuehne Clínica Médica oferece cuidados de saúde de excelência com uma equipe médica especializada e moderna infraestrutura. Agende sua consulta hoje.',
    images: [
      {
        url: '/logo-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Kuehne Clínica Médica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuehne Clínica Médica | Excelência em Cuidados de Saúde',
    description: 'Kuehne Clínica Médica oferece cuidados de saúde de excelência com uma equipe médica especializada e moderna infraestrutura.',
    images: ['/logo-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
