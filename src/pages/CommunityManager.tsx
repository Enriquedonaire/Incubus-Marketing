import React from 'react';
import { Users, TrendingUp, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function CommunityManager() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialMediaPosts = [
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
    "https://images.unsplash.com/photo-1560472355-536de3962603",
    "https://images.unsplash.com/photo-1585247226801-bc613c441316",
    "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6",
    "https://images.unsplash.com/photo-1504270997636-07ddfbd48945",
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    "https://images.unsplash.com/photo-1557838923-2985c318be48"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative bg-gradient-to-br from-black via-blue-950 to-black flex items-center">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gray-400 mb-4">Manejo de redes sociales</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Servicio de Community manager
            </h1>
            <p className="text-gray-300 mb-8">
              Ponemos a la disposición de tu marca o empresa, nuestro equipo creativo capaz de desarrollar
              estrategias de contenido que se fusionan con diseños de últimas tendencias.
            </p>
            <p className="text-gray-300">
              Tu marca presente en las principales Redes Sociales, interactuando con los consumidores y
              atrayendo nuevos y potenciales clientes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80"
              alt="Social Media Management"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref1} className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          >
            Servicio de Community Manager en Argentina
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-300 max-w-4xl mx-auto mb-20"
          >
            Gestionamos tu comunidad en las diferentes redes sociales, como si fuera nuestra. Nos encargamos de tus campañas de
            comunicación, animamos a la comunidad generando contenidos de interés, logramos humanizar tu marca y conseguir mayor
            engagement con tu público objetivo.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4"
            >
              {socialMediaPosts.map((url, i) => (
                <div key={i} className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={`${url}?auto=format&fit=crop&w=300&q=80`}
                    alt={`Social Media Post ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">TU EQUIPO DE</h3>
              <h4 className="text-4xl font-bold text-white mb-8">Community Manager</h4>
              <p className="text-gray-300">
                Cuidamos de la presencia online de tu marca desde el comienzo, a partir de la planificación, branding
                y creación de la identidad visual. Desarrollamos la producción integral del contenido, gestión y
                monitoreo de las diferentes redes.
              </p>
              <p className="text-gray-300">
                Trabajamos con influencers del segmento, para lograr un crecimiento real y paulatino.
                Respondemos mensajes y consultas, para estar siempre en contacto con tu público.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref2} className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12 text-white"
          >
            CONOCÉ MÁS SOBRE
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
          >
            Content & Social Media
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <span className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center">1</span>
                <h4 className="text-xl font-bold text-white">Community Manager</h4>
              </div>
              <p className="text-gray-300">
                Se encarga de diseñar estrategias, planificar y calendarizar contenido, idear copys
                atractivos y publicaciones para historias, moderar la comunidad y gestionar mensajes y
                comentarios, asegurando una conexión auténtica entre tu marca y tu audiencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <span className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center">2</span>
                <h4 className="text-xl font-bold text-white">Diseñador Gráfico</h4>
              </div>
              <p className="text-gray-300">
                Es el responsable de la identidad visual de tu marca, seleccionando tipografías y paletas
                de colores representativas, diseñando un feed armónico y creando piezas gráficas
                atractivas para publicaciones y anuncios.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <span className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center">3</span>
                <h4 className="text-xl font-bold text-white">Paid Media / Trafficker</h4>
              </div>
              <p className="text-gray-300">
                Se encarga de crear y gestionar campañas publicitarias, definiendo segmentaciones,
                configurando públicos específicos, y optimizando anuncios para maximizar resultados y
                alcanzar los objetivos de la marca.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section ref={ref3} className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-900 to-pink-600 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Manejo y Publicidad en Instagram</h3>
              <p className="text-gray-200 mb-8">Conectá con tu público y convertí seguidores en clientes. ¡Impulsá tu marca!</p>
              <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
                <span>VENDER EN INSTAGRAM</span>
                <Instagram className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900 to-blue-600 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Diseño y publicidad en Facebook</h3>
              <p className="text-gray-200 mb-8">Diseño de Fanpage, Banners, Flyers, Publicidades, video y más.</p>
              <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
                <span>VENDER EN FACEBOOK</span>
                <Facebook className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-red-900 to-red-600 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Publicidad en Youtube</h3>
              <p className="text-gray-200 mb-8">Creamos campañas estratégicas para convertir visualizaciones en resultados.</p>
              <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
                <span>VENDER EN YOUTUBE</span>
                <Youtube className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
            Nuestro objetivo: ¡Potenciar tus Redes Sociales al Máximo!
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Sacar el máximo partido de tus Redes Sociales",
              "Analizar a tu competencia y proponer contenidos de valor",
              "Conseguir que te conozcan o situarte en el top of mind de tus clientes",
              "Implementar una estrategia de Inbound Marketing efectiva"
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  ✓
                </div>
                <p className="text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>
    </div>
  );
}