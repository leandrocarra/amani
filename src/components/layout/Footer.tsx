export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Amani. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 