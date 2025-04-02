import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-white shadow-md" : "hover:text-blue-400";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/diseno-web', label: 'Diseño Web' },
    { path: '/community-manager', label: 'Community Manager' },
    { path: '/diseno-grafico', label: 'Diseño gráfico' },
    { path: '/contenido-audiovisual', label: 'Contenido Audiovisual' },
    { path: '/trabajos', label: 'Trabajos' },
    { path: '/about', label: 'Sobre Nosotros' },
  ];

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
  }`;

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <nav className={`${navbarClasses} bg-gradient-to-b from-black to-transparent`}>
      <div className="container mx-auto px-6 ">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold z-50">
        <p className="italic">INCUBUS </p>
        </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Contacto
            </Link>
          </div>
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-black md:hidden pt-20"
            >
              <div className="flex flex-col items-center space-y-8 p-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-xl text-white transition ${isActive(item.path)}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contacto"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}