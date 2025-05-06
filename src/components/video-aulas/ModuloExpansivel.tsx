'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ModuloExpansivelProps {
  titulo: string;
  itens?: string[];
  expandidoPorPadrao?: boolean;
}

export function ModuloExpansivel({ titulo, itens = [], expandidoPorPadrao = false }: ModuloExpansivelProps) {
  const [expandido, setExpandido] = useState(expandidoPorPadrao);

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <button
        className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50"
        onClick={() => setExpandido(!expandido)}
      >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="font-medium text-gray-900">{titulo}</span>
        </div>
        {expandido ? (
          <ChevronUp className="h-5 w-5 text-gray-900" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-900" />
        )}
      </button>

      {expandido && itens.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          <div className="space-y-3">
            {itens.map((item) => (
              <label key={item} className="flex items-center gap-2 hover:cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-900">{item}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 