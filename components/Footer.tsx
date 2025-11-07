export default function Footer() {
  return (
    <footer className="border-t border-acc-gray-700 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-acc-gray-400">
          <p>
            © {new Date().getFullYear()} Accenture. Accenture and the &gt; device are trademarks of Accenture.
          </p>
          <p className="mt-2 text-xs text-acc-muted">
            This is a demonstration portal showcasing potential modernization capabilities.
          </p>
        </div>
      </div>
    </footer>
  );
}


