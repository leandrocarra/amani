import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Amani</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Sobre
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 