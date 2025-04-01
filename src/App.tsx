import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { DisenoWeb } from './pages/DisenoWeb';
import { CommunityManager } from './pages/CommunityManager';
import { DisenoGrafico } from './pages/DisenoGrafico';
import { ContenidoAudiovisual } from './pages/ContenidoAudiovisual';
import { Trabajos } from './pages/Trabajos';
import { Contacto } from './pages/Contacto';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseno-web" element={<DisenoWeb />} />
          <Route path="/community-manager" element={<CommunityManager />} />
          <Route path="/diseno-grafico" element={<DisenoGrafico />} />
          <Route path="/contenido-audiovisual" element={<ContenidoAudiovisual />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;