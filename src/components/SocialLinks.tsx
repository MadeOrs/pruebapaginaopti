import { Twitter, Instagram } from 'lucide-react';

export function SocialLinks() {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Síguenos en Redes Sociales
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/bask1ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Twitter className="h-8 w-8" />
          </a>
          <a
            href="https://instagram.com/bask1ng.optimizaciones"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors"
          >
            <Instagram className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}