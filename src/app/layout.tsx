import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amani Soluções",
  description: "Plataforma Amani Soluções - Soluções inteligentes para seu negócio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { pathname: string };
}) {
  const isLoginPage = params?.pathname === '/login';

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {!isLoginPage && <Header />}
          <main className="flex-1">{children}</main>
          {!isLoginPage && <Footer />}
        </div>
      </body>
    </html>
  );
}
