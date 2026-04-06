import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ramatech.co.in"),

  title: {
    default: "RamaTech Solution — AI-Powered Infrastructure Consulting India",
    template: "%s | RamaTech Solution",
  },

  description:
    "RamaTech Solution delivers enterprise-grade Observability, OpenShift, DevOps, and SAP integration — AI-accelerated, production-ready, in weeks not months. Trusted by startups and enterprises across India and globally.",

  keywords: [
    "DevOps consulting India",
    "Kubernetes setup India",
    "OpenShift consulting",
    "Observability services India",
    "VictoriaMetrics Grafana setup",
    "SAP integration consulting",
    "CI/CD pipeline setup",
    "AI-powered DevOps",
    "infrastructure consulting India",
    "SRE consulting",
    "cloud infrastructure India",
    "Terraform consulting",
    "monitoring and alerting setup",
    "RamaTech Solution",
    "ramatech.co.in",
  ],

  authors: [{ name: "RamaTech Solution", url: "https://ramatech.co.in" }],
  creator: "RamaTech Solution",
  publisher: "RamaTech Solution",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ramatech.co.in",
    siteName: "RamaTech Solution",
    title: "RamaTech Solution — AI-Powered Infrastructure Consulting",
    description:
      "4 enterprise specialists in Observability, OpenShift, DevOps & SAP — using AI to deliver production infrastructure in weeks, not quarters.",
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
    title: "RamaTech Solution — AI-Powered Infrastructure Consulting",
    description:
      "Enterprise Observability, OpenShift, DevOps & SAP integration — AI-accelerated delivery for startups and enterprises.",
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
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
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
