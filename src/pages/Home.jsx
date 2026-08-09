import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import { propertiesData } from '../data/properties';
import { Users, Calculator, ShieldCheck, ArrowRight, Building2, Frown, Sparkles } from 'lucide-react';

export default function Home() {
  const [filters, setFilters] = useState({
    operation: 'Todos',
    type: 'Todos',
    location: '',
    maxPrice: ''
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      operation: 'Todos',
      type: 'Todos',
      location: '',
      maxPrice: ''
    });
  };

  // Real-time property filtering logic
  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      // Operation filter ('Venta' | 'Alquiler')
      if (filters.operation !== 'Todos' && property.operation !== filters.operation) {
        return false;
      }

      // Property type filter ('Departamento' | 'Casa' | 'PH' | 'Oficina')
      if (filters.type !== 'Todos' && property.type !== filters.type) {
        return false;
      }

      // Location search filter
      if (
        filters.location.trim() !== '' &&
        !property.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        !property.title.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Max price filter
      if (filters.maxPrice !== '' && property.price > Number(filters.maxPrice)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-slate-950 text-white px-4 sm:px-6 lg:px-8 overflow-hidden py-16">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Fondo Inmobiliaria"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 w-full">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>HogarUrban Real Estate • Experiencia Inmobiliaria</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Encontrá el lugar donde <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-200">
                querés vivir
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Explorá casas, departamentos, PHs y oficinas exclusivas. Asesoramiento profesional y transparencia garantizada en cada etapa.
            </p>
          </div>

          {/* Centered PropertyFilter Panel */}
          <div className="pt-2">
            <PropertyFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DESTACADOS (REAL-TIME FILTERED GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Catálogo de Oportunidades</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Propiedades Destacadas
            </h2>
          </div>
          <div className="text-sm font-medium text-slate-500">
            Mostrando <span className="font-bold text-slate-900">{filteredProperties.length}</span> inmuebles disponibles
          </div>
        </div>

        {/* Grid de Propiedades o Mensaje de Aviso Amigable */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto">
              <Frown className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No encontramos coincidencias</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No hay inmuebles que cumplan con todos los criterios de búsqueda seleccionados. Intentá modificar los filtros o restablecer la búsqueda.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all shadow-md"
            >
              Ver todas las propiedades
            </button>
          </div>
        )}
      </section>

      {/* 3. SECCIÓN POR QUÉ ELEGIRNOS */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Nuestros Pilares</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">¿Por qué elegir HogarUrban?</h2>
            <p className="text-slate-400 text-base">
              Nos enfocamos en brindar valor real y tranquilidad en la decisión inmobiliaria más importante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-800/80 border border-slate-700/60 p-8 rounded-3xl space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-14 h-14 bg-sky-500/20 text-sky-400 rounded-2xl flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Atención Personalizada</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Asesores dedicados que entienden tus requerimientos específicos y te guían paso a paso desde la primera visita hasta la firma del boleto.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/80 border border-slate-700/60 p-8 rounded-3xl space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-14 h-14 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center">
                <Calculator className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Tasaciones Precisas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Evaluaciones técnicas de mercado basadas en ofertas reales vigentes y antecedentes de venta concretos en la zona de tu inmueble.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/80 border border-slate-700/60 p-8 rounded-3xl space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Seguridad Jurídica</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Revisión exhaustiva de títulos, dominios e inhibiciones. Operaciones transparentes bajo la supervisión de profesionales matriculados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN CALL TO ACTION (CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
            <Building2 className="w-96 h-96" />
          </div>

          <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-white/20 text-white backdrop-blur-md">
              ¿Querés vender o alquilar?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Tasamos tu propiedad al valor real del mercado
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Solicitá tu valoración profesional sin compromiso y descubrí el verdadero potencial comercial de tu inmueble.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-sky-900 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <span>Solicitar Tasación</span>
              <ArrowRight className="w-5 h-5 text-sky-600" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
