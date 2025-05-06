import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Página não encontrada
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
} 