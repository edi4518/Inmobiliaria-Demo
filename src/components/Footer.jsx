import { Link } from 'react-router-dom';
import { Building2, MapPin, Mail, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800 dark:border-slate-900 transition-colors">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Column 1: Marca & Presentación Institucional */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-sky-600/30">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  HogarUrban
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  Real Estate
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Somos líderes en el sector inmobiliario urbano. Brindamos asesoramiento integral y personalizado para la compra, venta, alquiler y valuación de propiedades residenciales y comerciales.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-800 dark:border-slate-800/80">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Matrícula CUCICBA N° 7842 - Excelencia e Integridad Garantes.</span>
            </div>
          </div>

          {/* Column 2: Navegación & Secciones */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-b border-slate-800 pb-2">
              Navegación & Propiedades
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link 
                  to="/propiedades?tipo=venta" 
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                  Propiedades en Venta
                </Link>
              </li>
              <li>
                <Link 
                  to="/propiedades?tipo=alquiler" 
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                  Propiedades en Alquiler
                </Link>
              </li>
              <li>
                <Link 
                  to="/propiedades?tipo=emprendimientos" 
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                  Nuevos Emprendimientos
                </Link>
              </li>
              <li>
                <Link 
                  to="/nosotros" 
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                  Tasaciones y Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto & WhatsApp */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-b border-slate-800 pb-2">
              Información de Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>Av. Libertador 4580, Piso 8, Ciudad Autónoma de Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="mailto:contacto@hogarurban.com" className="hover:text-white transition-colors">
                  contacto@hogarurban.com
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:shadow-emerald-500/30"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/80 dark:bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} HogarUrban Real Estate. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Términos y Condiciones</span>
            <span className="hover:text-slate-300 cursor-pointer">Políticas de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
