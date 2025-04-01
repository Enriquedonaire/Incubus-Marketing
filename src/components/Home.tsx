import { BarChart3, Bell, Search, Share2, Mail, Heart, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DisenoWeb } from '../pages/DisenoWeb';
import { CommunityManager } from '../pages/CommunityManager';
import { DisenoGrafico } from '../pages/DisenoGrafico';
import { ContenidoAudiovisual } from '../pages/ContenidoAudiovisual';

export function Home() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative bg-gradient-to-br from-black via-blue-950 to-black flex items-center">
        <div className=" mx-auto px-4 sm:px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
              >
                WE EMPOWER BRANDS
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg"
              >
                Somos una Agencia Boutique de Marketing Digital & Content.
                Acompañamos y potenciamos tu crecimiento con estrategias y contenido de valor.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to="/about">
                  <button className="border-2 border-white px-6 sm:px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                    CONOCENOS
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              {/* Main Phone Mockup */}
              <div className="relative w-[300px] h-[600px] mx-auto">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute inset-0 mt-8 p-4">
                    {/* Analytics Graph */}
                    <div className="bg-black/80 rounded-2xl p-4 mb-4">
                      <h3 className="text-sm font-semibold mb-2">VISITS</h3>
                      <p className="text-xs text-gray-400">number of visitors by date</p>
                      <div className="h-32 mt-4 flex items-end space-x-2">
                        {[40, 70, 45, 90, 65, 85, 40].map((height, i) => (
                          <div key={i} className="flex-1">
                            <div
                              className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Media Post */}
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80"
                        alt="Landscape"
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center space-x-4 mb-2">
                          <Heart className="w-5 h-5 text-red-500" />
                          <Instagram className="w-5 h-5 text-gray-600" />
                        </div>
                        <p className="text-sm text-gray-600">Beautiful sunset view #nature #photography</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -right-20 top-10 bg-white p-4 rounded-xl shadow-lg"
                >
                  <Mail className="w-8 h-8 text-purple-600" />
                </motion.div>

                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -left-20 top-1/3 bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="text-black">
                    <p className="font-bold">Conversion</p>
                    <p className="text-green-500 text-2xl font-bold">+65%</p>
                    <BarChart3 className="w-6 h-6 mt-2" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute top-20 -right-10 flex space-x-2"
                >
                  <Bell className="w-6 h-6 text-white" />
                  <Share2 className="w-6 h-6 text-white" />
                  <Search className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={ref1} className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Nuestros Servicios
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Diseño Web",
                description: "Sitios web profesionales y responsivos",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Community Manager",
                description: "Gestión profesional de redes sociales",
                image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Diseño Gráfico",
                description: "Identidad visual y branding",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Contenido Audiovisual",
                description: "Videos y fotografía profesional",
                image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <div className="aspect-square">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref2} className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Clientes Satisfechos" },
              { number: "1.5K+", label: "Proyectos Completados" },
              { number: "98%", label: "Tasa de Retención" },
              { number: "24/7", label: "Soporte Dedicado" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.h3
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={inView2 ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <DisenoWeb />
      <CommunityManager />
      <DisenoGrafico />
      <ContenidoAudiovisual />

      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}