import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RamaTech Solution",
  description: "Deploy production-ready Kubernetes in 2 weeks for startups and SaaS founders."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
