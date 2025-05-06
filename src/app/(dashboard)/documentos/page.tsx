export default function Documentos() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Documentos</h1>
        <p className="mt-1 text-sm text-gray-500">
          Acesse todos os documentos disponíveis.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100"></div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Documento {i + 1}</h3>
                <p className="mt-1 text-sm text-gray-500">Descrição do documento</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 