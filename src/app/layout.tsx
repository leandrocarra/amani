import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amani Soluções",
  description: "Plataforma Amani Soluções - Soluções inteligentes para seu negócio",
};

const publicRoutes = ['/login', '/', '/about', '/contact'];

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { pathname: string };
}) {
  const isPublicRoute = publicRoutes.includes(params?.pathname || '');

  if (!isPublicRoute) {
    return (
      <html lang="pt-BR">
        <body className={inter.className}>
          <DashboardLayout>{children}</DashboardLayout>
        </body>
      </html>
    );
  }

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {params?.pathname !== '/login' && <Header />}
          <main className="flex-1">{children}</main>
          {params?.pathname !== '/login' && <Footer />}
        </div>
      </body>
    </html>
  );
}
