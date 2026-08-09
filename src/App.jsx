import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Propiedades from './pages/Propiedades';
import DetallePropiedad from './pages/DetallePropiedad';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propiedades" element={<Propiedades />} />
            <Route path="/propiedad/:id" element={<DetallePropiedad />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
