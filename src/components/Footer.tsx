import { Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Desarrollos Webs</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Páginas Web Simples</li>
              <li className="hover:text-blue-400 transition">Páginas Web Profesionales</li>
              <li className="hover:text-blue-400 transition">Páginas Web Catalogo</li>
              <li className="hover:text-blue-400 transition">Páginas Web Ecommerce</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Publicidad en Redes Sociales</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Vender en Facebook</li>
              <li className="hover:text-blue-400 transition">Vender en Instagram</li>
              <li className="hover:text-blue-400 transition">Vender en Youtube</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Posicionamiento Web</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Posicionamiento SEO</li>
              <li className="hover:text-blue-400 transition">Posicionamiento SEM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Identidad Corporativa</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Diseño de logo</li>
              <li className="hover:text-blue-400 transition">Diseño publicitario</li>
              <li className="hover:text-blue-400 transition">Fotografía y video</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-2">o envianos un mail...</p>
          <a 
            href="mailto:hola@Incubus.com.ar" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
          >
            <Mail className="w-5 h-5 mr-2" />
            hola@Incubus.com.ar
          </a>
        </div>
        
        <div className="text-center mt-10 border-t border-gray-800 pt-8">
          <p className="text-gray-400 mb-6">© 2025 Incubus. Agencia de Marketing Digital | Términos y Condiciones</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition flex items-center"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition flex items-center"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}