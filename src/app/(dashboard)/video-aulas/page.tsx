'use client';

import { ModuloExpansivel } from '@/components/video-aulas/ModuloExpansivel';

export default function VideoAulas() {
  return (
    <div className="flex h-[calc(100vh-2rem)] gap-6">
      {/* Área principal do vídeo e conteúdo */}
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-bold text-gray-900">Como fazer cirurgia sem matar o paciente</h1>
        
        {/* Player de vídeo */}
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
          {/* Aqui você pode adicionar seu componente de player de vídeo */}
          <div className="h-full w-full bg-gray-800"></div>
        </div>

        {/* Descrição abaixo do vídeo */}
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-medium text-gray-900">Domine as principais ferramentas da cirurgia de nariz</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac iaculis augue. Prain
            vestibulum lorem nec tortor rhoncus, a dictum tellus rutrum. Etiam varius quam id leo
            molestie rutrum. Cras vitae vestibulum leo. Quisque sollicitudin augue nec eros tempus, at
            commodo diam consectetur. Donec et ultricies mauris. Duis efficitur, tellus eget lobortis
          </p>
        </div>
      </div>

      {/* Menu lateral direito */}
      <div className="w-80 space-y-2 overflow-y-auto">
        <ModuloExpansivel titulo="Cirurgias" />
        
        <ModuloExpansivel
          titulo="Suturas - como fazer do zero"
          itens={['Cirurgias', 'ABC', 'Aula mestre', 'ZYZ', 'XXXXXXXXXXX']}
          expandidoPorPadrao={true}
        />

        <ModuloExpansivel titulo="Cirurgias" />
        <ModuloExpansivel titulo="Sangue" />
        <ModuloExpansivel titulo="ABC" />
        <ModuloExpansivel titulo="EFG" />
      </div>
    </div>
  );
} 