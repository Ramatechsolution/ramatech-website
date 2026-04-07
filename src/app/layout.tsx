import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080c14",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ramatech.co.in"),

  title: {
    default: "RamaTech Solution — DevOps, Kubernetes & Cloud Infrastructure Consulting",
    template: "%s | RamaTech Solution",
  },

  description:
    "RamaTech Solution delivers AI-accelerated DevOps, Kubernetes, Observability, OpenShift and SAP consulting for startups and enterprises worldwide. Production-ready infrastructure in weeks, not months.",

  keywords: [
    "DevOps consulting",
    "Kubernetes consulting",
    "DevOps consulting agency",
    "Kubernetes setup service",
    "Observability engineering",
    "OpenShift consulting",
    "SAP integration consulting",
    "CI/CD pipeline setup",
    "AI-powered DevOps",
    "remote infrastructure consulting",
    "cloud infrastructure consulting",
    "SRE consulting",
    "Terraform consulting",
    "Grafana VictoriaMetrics setup",
    "DevOps as a service",
    "platform engineering consulting",
  ],

  authors: [{ name: "RamaTech Solution", url: "https://ramatech.co.in" }],
  creator: "RamaTech Solution",
  publisher: "RamaTech Solution",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramatech.co.in",
    siteName: "RamaTech Solution",
    title: "RamaTech Solution — AI-Powered DevOps & Cloud Consulting",
    description:
      "4 enterprise specialists delivering DevOps, Kubernetes, Observability and SAP consulting worldwide. AI-accelerated. Production-ready.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RamaTech Solution — AI-Powered Infrastructure Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RamaTech Solution — AI-Powered DevOps & Cloud Consulting",
    description:
      "Enterprise DevOps, Kubernetes, Observability & SAP consulting — AI-accelerated delivery worldwide.",
    images: ["/og-image.png"],
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
    google: "imK5HSTIM_iXUs28zT7WtctAM7w8SjzgfwPoTKe2irs",
  },

  alternates: {
    canonical: "https://www.ramatech.co.in",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
