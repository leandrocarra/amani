import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-6xl font-black text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300">
            404
          </span>
        </h1>
        <p className="text-white/80 text-xl mb-6">
          Página não encontrada
        </p>
        <Link href="/" className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-lg inline-block">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
} 