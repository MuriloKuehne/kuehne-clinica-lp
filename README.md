# Kuehne Clínica Médica - Landing Page

A modern, responsive landing page for Kuehne Clínica Médica built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional medical clinic landing page
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 16 App Router for optimal performance
- **Type-Safe**: Full TypeScript support for better developer experience
- **Component-Based**: Modular component architecture for easy maintenance
- **Accessible**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kuehne-clinica-lp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
kuehne-clinica-lp/
├── app/                    # Next.js App Router directory
│   ├── components/         # Page-specific components
│   │   ├── About.tsx
│   │   ├── AppointmentForm.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Location.tsx
│   │   ├── MedicalTeam.tsx
│   │   ├── Specialties.tsx
│   │   └── Testimonials.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Shared UI components
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
├── lib/                    # Utility functions
│   └── utils.ts
├── public/                 # Static assets
│   ├── logo.jpg
│   └── ...
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Components

### Page Components

- **Header**: Navigation and header section
- **Hero**: Hero section with image carousel
- **About**: About the clinic section
- **MedicalTeam**: Medical team showcase
- **Specialties**: Medical specialties offered
- **AppointmentForm**: Appointment booking form
- **Location**: Clinic location and map
- **Contact**: Contact information
- **Testimonials**: Patient testimonials
- **Footer**: Footer with links and information

### UI Components

The project uses shadcn/ui components for consistent styling:
- Button
- Card
- Input
- Label
- Textarea

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed and live!

### Other Deployment Options

You can also deploy to other platforms:

- **Netlify**: [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- **AWS**: [Next.js on AWS](https://aws.amazon.com/blogs/mobile/deploy-a-next-js-app-to-aws-amplify/)
- **Docker**: Build a Docker image and deploy to any container platform

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server (after build)

## 🔧 Configuration

### Next.js Configuration

The `next.config.ts` file includes:
- Image optimization settings for Unsplash images
- Remote image patterns configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with PostCSS. Configuration is handled through:
- `postcss.config.mjs` - PostCSS configuration
- `app/globals.css` - Global styles and Tailwind directives

## 🌐 Environment Variables

Currently, no environment variables are required. If you need to add any:

1. Create a `.env.local` file in the root directory
2. Add your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For any changes or improvements, please contact the project maintainer.

## 📞 Support

For questions or support, please contact the development team.

---

Built with ❤️ using Next.js and TypeScript
