import Link from 'next/link';
import { UserCircle, Play, FileText, Folder } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      {/* Perfil do usuário */}
      <div className="flex items-center space-x-3 border-b border-gray-200 p-4">
        <UserCircle className="h-8 w-8 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">nome pessoa</span>
      </div>

      {/* Menu de navegação */}
      <nav className="flex-1 space-y-1 p-4">
        <Link
          href="/video-aulas"
          className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Play className="h-5 w-5 text-gray-500" />
          <span>Video aulas</span>
        </Link>

        <Link
          href="/documentos"
          className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <FileText className="h-5 w-5 text-gray-500" />
          <span>Documentos</span>
        </Link>

        <Link
          href="/modulo-x"
          className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Folder className="h-5 w-5 text-gray-500" />
          <span>Módulo X</span>
        </Link>

        <Link
          href="/modulo-y"
          className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Folder className="h-5 w-5 text-gray-500" />
          <span>Módulo Y</span>
        </Link>
      </nav>
    </aside>
  );
} 