import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

// Definindo as fontes
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

export default function LandingPage() {
  return (
    <div className={`${montserrat.className} bg-[#F6ECE6] min-h-screen`}>
      {/* Header */}
      <header className="py-6 px-4 md:px-10 flex justify-between items-center">
        <div className="relative h-14 w-48">
          {/* Logo AMANI */}
          <Image 
            src="/img/logo-amani.svg" 
            alt="AMANI SOLUÇÕES EM SAÚDE" 
            width={200} 
            height={60}
            className="object-contain"
          />
        </div>
        <nav className="hidden md:flex space-x-8 text-[#5F5F53]">
          <Link href="/landing#sobre" className="hover:text-[#B4998A] transition-colors">Sobre</Link>
          <Link href="/landing#servicos" className="hover:text-[#B4998A] transition-colors">Serviços</Link>
          <Link href="/landing#contato" className="hover:text-[#B4998A] transition-colors">Contato</Link>
        </nav>
        <button className="bg-[#5F5F53] text-white px-5 py-2 rounded-full text-sm hover:bg-[#B4998A] transition-colors">
          Agende uma consulta
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-[#5F5F53] mb-6">
            AMANI
            <span className="block text-2xl md:text-3xl mt-2 tracking-widest">SOLUÇÕES EM SAÚDE</span>
          </h1>
          <p className="text-[#B4998A] text-lg md:text-xl mb-8 max-w-xl">
            Cuidando da sua saúde com excelência e dedicação. Soluções personalizadas para o seu bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#B4998A] text-white px-8 py-3 rounded-full text-sm hover:bg-[#5F5F53] transition-colors">
              Conheça nossos serviços
            </button>
            <button className="border border-[#B4998A] text-[#B4998A] px-8 py-3 rounded-full text-sm hover:bg-[#B4998A] hover:text-white transition-colors">
              Entre em contato
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-md h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl">
            {/* Imagem principal */}
            <div className="absolute inset-0 bg-[#B4998A] rounded-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-80">
                {/* Logo A estilizado */}
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 10 L80 90 L20 90 Z" fill="none" stroke="white" strokeWidth="2"/>
                  <path d="M30 50 C40 30, 60 30, 70 50" fill="none" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sobre Section */}
      <section id="sobre" className="py-16 md:py-24 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#5F5F53] mb-12 text-center">Sobre a AMANI</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden bg-[#D3C2B5] flex items-center justify-center">
                <div className="w-1/2 h-1/2 relative">
                  {/* Logo A estilizado */}
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M50 10 L80 90 L20 90 Z" fill="none" stroke="#5F5F53" strokeWidth="2"/>
                    <path d="M30 50 C40 30, 60 30, 70 50" fill="none" stroke="#5F5F53" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-[#5F5F53] mb-6">
                A AMANI SOLUÇÕES EM SAÚDE nasceu do desejo de proporcionar um atendimento diferenciado na área da saúde, 
                onde cada paciente é tratado com exclusividade e atenção personalizada.
              </p>
              <p className="text-[#5F5F53] mb-6">
                Nossa equipe é formada por profissionais altamente qualificados e comprometidos com o bem-estar 
                dos nossos pacientes, oferecendo soluções integradas de saúde.
              </p>
              <p className="text-[#B4998A] font-medium">
                Aqui, sua saúde está em primeiro lugar, e nosso compromisso é oferecer o melhor atendimento 
                com dignidade, respeito e humanização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 md:py-24 px-4 md:px-10 bg-[#F6ECE6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#5F5F53] mb-12 text-center">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-[#D3C2B5] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5F5F53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#5F5F53] mb-4">Atendimento Personalizado</h3>
              <p className="text-[#B4998A]">
                Oferecemos atendimento individualizado, respeitando as necessidades específicas de cada paciente.
              </p>
            </div>
            
            {/* Serviço 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-[#D3C2B5] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5F5F53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#5F5F53] mb-4">Consultas Especializadas</h3>
              <p className="text-[#B4998A]">
                Consultas com especialistas em diversas áreas da saúde para diagnóstico preciso e tratamento eficaz.
              </p>
            </div>
            
            {/* Serviço 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-[#D3C2B5] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5F5F53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#5F5F53] mb-4">Exames e Procedimentos</h3>
              <p className="text-[#B4998A]">
                Realizamos diversos exames e procedimentos com equipamentos modernos e equipe especializada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="py-16 md:py-24 px-4 md:px-10 bg-[#5F5F53] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Nosso Diferencial</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#B4998A] rounded-full flex items-center justify-center">
                <span className="text-2xl font-light">01</span>
              </div>
              <h3 className="text-xl mb-2">Excelência</h3>
              <p className="text-sm text-[#D3C2B5]">Compromisso com a qualidade em todos os serviços</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#B4998A] rounded-full flex items-center justify-center">
                <span className="text-2xl font-light">02</span>
              </div>
              <h3 className="text-xl mb-2">Humanização</h3>
              <p className="text-sm text-[#D3C2B5]">Atendimento centrado na pessoa e suas necessidades</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#B4998A] rounded-full flex items-center justify-center">
                <span className="text-2xl font-light">03</span>
              </div>
              <h3 className="text-xl mb-2">Inovação</h3>
              <p className="text-sm text-[#D3C2B5]">Soluções modernas e eficientes para a sua saúde</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#B4998A] rounded-full flex items-center justify-center">
                <span className="text-2xl font-light">04</span>
              </div>
              <h3 className="text-xl mb-2">Acolhimento</h3>
              <p className="text-sm text-[#D3C2B5]">Ambiente confortável e acolhedor para todos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Highlights */}
      <section className="py-16 md:py-24 px-4 md:px-10 bg-[#F6ECE6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#5F5F53] mb-12 text-center">Siga-nos no Instagram</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="transform transition-transform hover:scale-105">
              <Image
                src="/img/highlight1.svg"
                alt="Destaque Instagram AMANI"
                width={100}
                height={100}
                className="rounded-full"
              />
            </a>
            <a href="#" className="transform transition-transform hover:scale-105">
              <Image
                src="/img/highlight2.svg"
                alt="Destaque Instagram AMANI"
                width={100}
                height={100}
                className="rounded-full"
              />
            </a>
            <a href="#" className="transform transition-transform hover:scale-105">
              <Image
                src="/img/highlight3.svg"
                alt="Destaque Instagram AMANI"
                width={100}
                height={100}
                className="rounded-full"
              />
            </a>
            <a href="#" className="transform transition-transform hover:scale-105">
              <div className="w-[100px] h-[100px] rounded-full bg-[#D3C2B5] flex items-center justify-center">
                <span className="text-white text-4xl">+</span>
              </div>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#5F5F53] hover:text-[#B4998A] transition-colors"
            >
              <span>@amanisolucoes</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-24 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#5F5F53] mb-12 text-center">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm text-[#5F5F53] mb-1">Nome completo</label>
                  <input 
                    type="text" 
                    id="nome" 
                    className="w-full px-4 py-3 rounded-lg border border-[#D3C2B5] focus:outline-none focus:border-[#B4998A]"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-[#5F5F53] mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-[#D3C2B5] focus:outline-none focus:border-[#B4998A]"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm text-[#5F5F53] mb-1">Mensagem</label>
                  <textarea 
                    id="mensagem" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#D3C2B5] focus:outline-none focus:border-[#B4998A]"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#B4998A] text-white px-8 py-3 rounded-full hover:bg-[#5F5F53] transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#5F5F53] mb-4">Informações de contato</h3>
                <p className="text-[#B4998A] mb-2">
                  <span className="block font-medium">Endereço:</span>
                  Av. Principal, 123 - Centro
                </p>
                <p className="text-[#B4998A] mb-2">
                  <span className="block font-medium">Telefone:</span>
                  (11) 9 9999-9999
                </p>
                <p className="text-[#B4998A] mb-2">
                  <span className="block font-medium">E-mail:</span>
                  contato@amanisolucoes.com
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#5F5F53] mb-4">Horário de atendimento</h3>
                <p className="text-[#B4998A] mb-1">Segunda a sexta: 8h às 18h</p>
                <p className="text-[#B4998A]">Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-10 bg-[#5F5F53] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="relative h-12 w-40 mb-4">
              {/* Logo AMANI (versão branca para fundo escuro) */}
              <div className="text-xl font-light tracking-wider">
                AMANI
                <span className="block text-xs tracking-widest">SOLUÇÕES EM SAÚDE</span>
              </div>
            </div>
            <p className="text-sm text-[#D3C2B5]">© {new Date().getFullYear()} AMANI. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[#D3C2B5] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
              </svg>
            </a>
            <a href="#" className="text-[#D3C2B5] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-[#D3C2B5] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.898a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 