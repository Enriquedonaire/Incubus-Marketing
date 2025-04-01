import { Palette, Image, Layout } from 'lucide-react';

export function DisenoGrafico() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Diseño Gráfico Creativo</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-2xl">
          <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Palette className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-4">Identidad Visual</h3>
          <p className="text-gray-300">Creamos la identidad visual que refleja la esencia de tu marca.</p>
        </div>

        <div className="bg-gradient-to-br from-teal-900 to-teal-800 p-8 rounded-2xl">
          <div className="bg-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Image className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-4">Material Publicitario</h3>
          <p className="text-gray-300">Diseñamos piezas publicitarias que capturan la atención.</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-8 rounded-2xl">
          <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Layout className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-4">Diseño Editorial</h3>
          <p className="text-gray-300">Maquetación profesional para tus publicaciones impresas y digitales.</p>
        </div>
      </div>
    </div>
  );
}