import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function HomeContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
        <h1 className={`${montserrat.className} text-6xl font-black text-white mb-4 tracking-tight`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300">
            AMANI SOLUÇÕES
          </span>
        </h1>
        <p className="text-white/80 text-xl mb-6">
          Bem-vindo ao projeto Amani com Next.js
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
            Explorar
          </button>
          <button className="bg-transparent text-white border border-white py-2 px-6 rounded-full hover:bg-white/10 transition-all">
            Saiba mais
          </button>
        </div>
        <div className="mt-6 text-xs text-white/60">
          Criado com Next.js e Tailwind CSS
        </div>
      </div>
    </div>
  );
} 