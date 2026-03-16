import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/AppProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ['latin'],
  weight: ['400', '700', "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Moon Nails Studio | Uñas, Pestañas y Cejas en Guadalajara",
    template: "%s | Moon Nails Studio",
  },

  description:
    "Moon Nails Studio: Un espacio pensado para tu bienestar, donde la tranquilidad, la calidad y la seguridad son nuestra prioridad. Especialistas en uñas, pestañas y cejas en Guadalajara.",

  keywords: [
    "uñas",
    "manicure",
    "pedicure",
    "pestañas",
    "cejas",
    "nail studio",
    "belleza Guadalajara",
    "uñas Guadalajara",
    "pestañas Guadalajara",
    "laminado se cejas",
    "seguridad e higiene",
  ],

  authors: [{ name: "Moon Nails Studio" }],
  creator: "Moon Nails Studio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://moonnailsstudio.com", // Adjust if domain is different
    title: "Moon Nails Studio | Uñas, Pestañas y Cejas",
    description:
      "Tu espacio de belleza y bienestar en Guadalajara. Calidad y seguridad en cada servicio de uñas, pestañas y cejas.",
    siteName: "Moon Nails Studio",
    locale: "es_MX",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Moon Nails Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moon Nails Studio",
    description:
      "Uñas, pestañas y cejas de alta calidad en Guadalajara.",
    images: ["/img/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/img/logo.png",
  },

  alternates: {
    canonical: "https://moon_nails_studio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${poppins.variable} ${cinzel.variable}`}>
      <body className={poppins.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
