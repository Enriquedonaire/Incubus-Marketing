import React from 'react';
import { Code, Globe, Smartphone, Wrench, Mail, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function DisenoWeb() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative bg-white flex items-center">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-black"
          >
            <h2 className="text-gray-600 mb-4">Diseño web en Argentina</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Desarrollo de Páginas Web profesionales
            </h1>
            <p className="text-gray-600 mb-8">
              Desarrollamos una página web de alto impacto visual presentando toda la
              información detallada de su empresa, servicio o producto.
            </p>
            <p className="text-gray-600">
              También incluimos en nuestros diseños de páginas web, estrategias de
              posicionamiento SEO y SEM, para que llegues rápidamente al público que busca
              tu producto o servicio.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80"
              alt="Diseño Web"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref1} className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Agencia especializada en diseño web
          </motion.h2>
          <p className="text-center max-w-3xl mx-auto mb-20 text-gray-300">
            Nos enfocamos como agencia especializada en Marketing Digital, de llevar a cabo un diseño de
            sitio web que cumpla con todos los requerimientos que tu empresa necesita, de ésta manera
            otorgarle mayor reconocimiento y por consiguiente maximizar su imagen y ventas.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-blue-500">
                <Code className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4">Diseño web HTML5 – Responsive</h3>
              <p className="text-gray-400">
                Nuestros sitios web son desarrollados mediante últimas tecnologías. Lo que garantiza tu sitio
                siempre visible y desde cualquier dispositivo. Tu marca online – 24 x 7 –
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-blue-500">
                <Globe className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4">Páginas Web con estilo</h3>
              <p className="text-gray-400">
                Diseñamos tu sitio web con el estilo que diferencia a tu marca. Además realizamos un análisis previo,
                donde nos encargamos de sentar las pautas de un branding que la lleve al éxito.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-blue-500">
                <Smartphone className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4">100% de Compatibilidad</h3>
              <p className="text-gray-400">
                Empleamos técnicas crossbrowser, para que nuestros Sitios Web se visualicen en todos los
                navegadores existentes y no pierdas clientes que buscan tu producto / servicio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator Section */}
      <section className="relative h-[400px] bg-white overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80"
            alt="Office Space"
            className="w-full h-full object-cover brightness-[1.1]"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        </motion.div>
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Soluciones digitales a tu medida
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Creamos experiencias web únicas que transforman visitantes en clientes leales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section ref={ref2} className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Mantenimiento Web
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <Globe className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Servicio de Hosting</h3>
                <p className="text-gray-400">
                  Contamos con un servicio de Hosting altamente estable y seguro. Con requerimientos específicos según el tipo de web.
                </p>
              </div>
              <div>
                <Wrench className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Mantenimiento Web</h3>
                <p className="text-gray-400">
                  Tu página web actualizada y en óptimo funcionamiento. Tareas de mantenimiento, limpieza de archivos basura,
                  modificaciones de algunos textos según tu necesidad.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <Mail className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Mails corporativos</h3>
                <p className="text-gray-400">
                  En conjunto con tu dominio, creamos las cuentas de correo corporativas que tu empresa necesita.
                  Como por ejemplo: info@tudominio.com.ar.
                </p>
              </div>
              <div>
                <Wrench className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Soporte Técnico</h3>
                <p className="text-gray-400">
                  Te brindamos soporte técnico de tu sitio web. En caso de sufrir algún inconveniente técnico,
                  nuestro equipo se encargará de analizar el problema y llevar a cabo el arreglo correspondiente.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-12"
            >
              <div>
                <Globe className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Atención personalizada</h3>
                <p className="text-gray-400">
                  Sector exclusivo para comunicación directa con nuestro equipo. Atención puntual e instantánea a tus consultas.
                  Siempre conectado.
                </p>
              </div>
              <div>
                <Cloud className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Back-up</h3>
                <p className="text-gray-400">
                  Realizamos tareas de Back-up semanales, para resguardar tu información. Respaldamos el contenido del
                  sitio web para brindarte mayor seguridad.
                </p>
              </div>
            </motion.div>
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