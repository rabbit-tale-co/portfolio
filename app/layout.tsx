import { Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "./providers/theme-provider"

// TODO: remove all SIDE borders from mobile UI

const geistMono = Geist_Mono({
  subsets: ["latin"],
})

function getAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const getBirthday = () => {
  const birthday = new Date("2001-08-11");
  const age = getAge(birthday);
  return age;
}

const startYear = 2016;

const getExperienceYears = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export const metadata = {
  title: {
    default: "Kris German - Designer & Developer",
    template: "%s | Kris German Portfolio"
  },
  description: `Portfolio of Kris German, a ${getBirthday()}-year-old designer and developer from Poland with ${getExperienceYears()}+ years of experience since ${startYear}. Specializing in modern web development, UI/UX design, and creative digital solutions.`,
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  keywords: [
    "Kris German",
    "designer",
    "developer",
    "portfolio",
    "Poland",
    "web development",
    "UI design",
    "UX design",
    "frontend developer",
    "creative developer",
    "digital design"
  ],
  authors: [{ name: "Kris German" }],
  creator: "Kris German",
  publisher: "RabbitTale",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio.rabbittale.co"), // Change to your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.rabbittale.co", // Change to your actual domain
    title: "Kris German - Designer & Developer",
    description: `Portfolio of Kris German, a ${getBirthday()}-year-old designer and developer from Poland with ${getExperienceYears()}+ years of experience since ${startYear}.`,
    siteName: "Kris German Portfolio",
    images: [
      {
        url: "https://cdn.discordapp.com/splashes/1004735926234271864/60d186cd18b27e1fe9efba5481e42a19.jpg?size=2048",
        alt: "Kris German - Designer & Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kris German - Designer & Developer",
    description: `Portfolio of Kris German, a ${getBirthday()}-year-old designer and developer from Poland with ${getExperienceYears()}+ years of experience since ${startYear}.`,
    images: ["https://cdn.discordapp.com/splashes/1004735926234271864/60d186cd18b27e1fe9efba5481e42a19.jpg?size=2048"], // Add your Twitter card image
    creator: "@hasiradoo", // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Add if you have Google Search Console
    // yandex: "your-yandex-verification-code", // Add if needed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistMono.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <main className="flex flex-col flex-1">
            <div className="h-full flex-1 max-w-screen-md mx-auto w-full border-l border-r border-border bg-background [&>section:not(#hero)]:pt-6 [&>section:is(:last-child)]:pb-6">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
