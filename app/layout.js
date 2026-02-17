import { Outfit, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "YOUMENE FITNESS | Coach Sportif Personnel & Coaching",
  icons: {
    icon: "/logo-youmene.jpeg",
    shortcut: "/logo-youmene.jpeg",
    apple: "/logo-youmene.jpeg",
  },
  description:
    "Transformez votre corps et votre esprit avec un coaching personnel d'élite. Programmes d'entraînement personnalisés, guide nutritionnel et accompagnement 1-à-1 avec le coach certifié Youmene.",
  keywords: [
    "coach sportif",
    "entraîneur personnel",
    "coaching fitness",
    "transformation physique",
    "musculation",
    "coaching nutritionnel",
  ],
  openGraph: {
    title: "YOUMENE FITNESS | Coach Sportif Personnel & Coaching",
    description:
      "Transformez votre corps et votre esprit avec un coaching personnel d'élite.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} data-theme="dark" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
