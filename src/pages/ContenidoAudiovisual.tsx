import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard, Monitor, Smartphone, Award } from 'lucide-react';

export function ContenidoAudiovisual() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1065618244?h=58bd385107&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0"
            className="absolute inset-0 w-full h-full"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              filter: 'brightness(1.3) contrast(1.1)',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="w-full px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 border-2 border-blue-500 rounded-full text-blue-400 text-sm font-medium tracking-wide">
                  PRODUCCIÓN AUDIOVISUAL
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
              >
                Creación de contenido<br />Audiovisual
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Nuestra productora audiovisual se especializa en la creación de contenido de fotografía y video de
                alta calidad para tus redes sociales y campañas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex justify-center gap-6"
              >
                <Link to="/trabajos">
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all transform hover:scale-105">
                    Ver Proyectos
                  </button>
                </Link>
                <Link to="/contacto">
                  <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white rounded-full font-medium transition-all transform hover:scale-105">
                    Contactar
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Nuestros Servicios Audiovisuales
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clapperboard />,
                title: "Producción de Video",
                description: "Creamos contenido audiovisual de alta calidad para tu marca"
              },
              {
                icon: <Monitor />,
                title: "Post-producción",
                description: "Edición profesional y efectos visuales"
              },
              {
                icon: <Smartphone />,
                title: "Contenido para Redes",
                description: "Optimizado para todas las plataformas sociales"
              },
              {
                icon: <Award />,
                title: "Calidad Premium",
                description: "Los mejores equipos y profesionales"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 text-blue-400 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Nuestro Proceso Creativo
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Pre-producción",
                description: "Planificación detallada y guionización del proyecto"
              },
              {
                number: "02",
                title: "Producción",
                description: "Grabación con equipos profesionales y equipo experto"
              },
              {
                number: "03",
                title: "Post-producción",
                description: "Edición, efectos visuales y corrección de color"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-7xl font-bold text-blue-500/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}