import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/shadcn-io/navbar-02";
import Footer from "@/components/custom/footer";
import { I18nProviderClient } from "@/locales/client";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dashtechafrica.com"),

  title: {
    default: "Dash Tech Africa — Smart Digital Solutions for Modern Businesses",
    template: "%s | Dash Tech Africa",
  },


  description:
    "Dash Tech Africa delivers innovative digital and web solutions that help modern businesses thrive. We specialize in enterprise software, web development, automation, and scalable digital tools tailored for African markets.",

  keywords: [
    "Dash Tech Africa",
    "Dash Tech",
    "Tech Solutions Africa",
    "Digital Transformation Africa",
    "Web Development Cameroon",
    "Software Engineering Africa",
    "Mobile Apps Africa",
    "Digital Agency Africa",
  ],

  authors: [{ name: "Dash Tech Africa" }],
  creator: "Dash Tech Africa",
  publisher: "Dash Tech Africa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dashtechafrica.com",
    siteName: "DashTech Africa",
    title: "Dash Tech Africa — Transforming African Businesses Through Technology",
    description:
      "Digital and web solutions for African businesses: enterprise apps, automation, cloud, web design, and next-generation digital tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dash Tech Africa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dash Tech Africa — Smart Digital Solutions",
    description:
      "We build scalable digital products for African businesses. Web apps, mobile apps, cloud, automation, and more.",
    images: ["/dash-logo-bg-white.webp"],
  },

  icons: {
    icon: "/dash-logo-bg-white.webp",
    shortcut: "/dash-logo-bg-white.webp",
    apple: "/dash-logo-bg-white.webp",
  },

  manifest: "/site.webmanifest",

  themeColor: "#ffffff",
};

interface AdminLayoutProps {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export default async function RootLayout({ params, children }: AdminLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} className="overscroll-contain scroll-smooth" suppressHydrationWarning>
      <I18nProviderClient locale={locale}>
        <body className={`${outfit.variable} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </I18nProviderClient>
    </html>
  );
}
