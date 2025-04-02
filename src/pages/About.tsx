import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Trophy } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Sobre Nosotros</h1>
            <p className="text-xl text-gray-300 mb-8">
              Somos una Agencia Boutique de Marketing Digital & Content. Acompañamos y potenciamos tu crecimiento con estrategias y contenido de valor.
            </p>
            <p className="text-xl text-gray-300">
              Nuestro equipo está compuesto por expertos en diversas áreas del marketing digital, diseño gráfico, y producción audiovisual, comprometidos en ofrecer soluciones creativas y efectivas para tu marca.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Equipo Profesional",
                description: "Expertos dedicados en cada área del marketing digital"
              },
              {
                icon: Target,
                title: "Enfoque Estratégico",
                description: "Soluciones personalizadas para cada cliente"
              },
              {
                icon: Lightbulb,
                title: "Innovación Constante",
                description: "Siempre al día con las últimas tendencias"
              },
              {
                icon: Trophy,
                title: "Resultados Comprobados",
                description: "Historias de éxito que respaldan nuestro trabajo"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl"
              >
                <item.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
                name: "Ana García",
                role: "Directora Creativa"
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
                name: "Carlos Rodríguez",
                role: "Director de Marketing Digital"
              },
              {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
                name: "Laura Martínez",
                role: "Diseñadora Senior"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}