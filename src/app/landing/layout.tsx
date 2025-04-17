import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'AMANI SOLUÇÕES EM SAÚDE | Cuidando da sua saúde',
  description: 'AMANI SOLUÇÕES EM SAÚDE - Cuidando da sua saúde com excelência e dedicação. Consultas especializadas, exames e atendimento personalizado.',
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 