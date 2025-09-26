import { Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "./providers/theme-provider"
import { Metadata, Viewport } from "next"
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from "sonner"
import { calculateAge, calculateExperience } from "@/lib/utils"

// TODO: remove all SIDE borders from mobile UI

const geistMono = Geist_Mono({
  subsets: ["latin"],
})

const startYear = 2016;

const getBirthday = () => {
  return calculateAge("2001-08-11");
}

const getExperienceYears = () => {
  return calculateExperience(startYear);
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  /* URL helpers -------------------------------------------------- */
  metadataBase: new URL('https://portfolio.rabbittale.co'),
  alternates: { canonical: '/' },

  /* Essential tags ---------------------------------------------- */
  title: {
    default: 'Kris German - Designer & Developer',
    template: '%s | Kris German Portfolio',
  },
  description:
    `Portfolio of Kris German, a ${getBirthday()}-year-old designer & developer ` +
    `from Poland with ${getExperienceYears()}+ years of experience since ${startYear}. ` +
    `Specializing in modern web development, UI/UX design and creative digital solutions.`,

  keywords: [
    'Kris German', 'designer', 'developer', 'portfolio', 'Poland',
    'web development', 'UI design', 'UX design', 'frontend developer',
    'creative developer', 'digital design',
  ],

  /* Author & ownership ------------------------------------------ */
  authors: [{ name: 'Kris German' }],
  creator: 'Kris German',
  /* "publisher" is **not** a recognised root field – move it here: */
  other: { publisher: 'RabbitTale' },

  /* Open Graph & Twitter cards ---------------------------------- */
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',                 // resolved against metadataBase
    title: 'Kris German - Designer & Developer',
    description:
      `Portfolio of Kris German, a ${getBirthday()}-year-old designer and developer ` +
      `from Poland with ${getExperienceYears()}+ years of experience since ${startYear}.`,
    siteName: 'Kris German Portfolio',
    images: [{
      url: '/og.png',               // relative ok because metadataBase is set
      alt: 'Kris German - Designer & Developer Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kris German - Designer & Developer',
    description:
      `Portfolio of Kris German, a ${getBirthday()}-year-old designer and developer ` +
      `from Poland with ${getExperienceYears()}+ years of experience since ${startYear}.`,
    images: ['/og.png'],
    creator: '@hasiradoo',
  },

  /* Robots / format detection ----------------------------------- */
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
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} async />
      </head>
      <body className={`${geistMono.className} antialiased min-h-screen flex flex-col select-none`}>
        <ThemeProvider>
          {/* <div
            className={cn(
              "fixed inset-0 z-[-1]",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
          /> */}
          <Header />
          <main className="flex flex-col flex-1">
            <div className="h-full flex-1 max-w-screen-md mx-auto w-full sm:border-l sm:border-r border-border bg-background [&>section:not(#hero)]:pt-6 [&>section:is(:last-child)]:pb-6">
              {children}
            </div>
          </main>
          <Footer />
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
