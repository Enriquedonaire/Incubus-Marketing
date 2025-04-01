import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contacto() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contacto</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Ponte en contacto</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Enviar mensaje
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4 text-blue-500" />
              <span>contacto@wodes.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4 text-blue-500" />
              <span>+34 900 123 456</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4 text-blue-500" />
              <span>Calle Principal 123, Madrid, España</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}