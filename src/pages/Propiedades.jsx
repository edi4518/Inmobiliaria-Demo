import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import { propertiesData } from '../data/properties';
import { Search, Filter, RefreshCw, Frown, SlidersHorizontal } from 'lucide-react';

export default function Propiedades() {
  const [searchTerm, setSearchTerm] = useState('');
  const [operation, setOperation] = useState('Todos');
  const [type, setType] = useState('Todos');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('0');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleResetFilters = () => {
    setSearchTerm('');
    setOperation('Todos');
    setType('Todos');
    setMaxPrice('');
    setMinBedrooms('0');
  };

  const hasActiveFilters = searchTerm !== '' || operation !== 'Todos' || type !== 'Todos' || maxPrice !== '' || minBedrooms !== '0';

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = property.title.toLowerCase().includes(query);
        const matchesLocation = property.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation) return false;
      }
      if (operation !== 'Todos' && property.operation !== operation) return false;
      if (type !== 'Todos' && property.type !== type) return false;
      if (maxPrice !== '' && property.price > Number(maxPrice)) return false;
      if (minBedrooms !== '0' && property.bedrooms < Number(minBedrooms)) return false;
      return true;
    });
  }, [searchTerm, operation, type, maxPrice, minBedrooms]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Bienes Raíces</span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Catálogo Completo de Propiedades
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Encontrá el inmueble ideal según tus preferencias de presupuesto y ubicación.
          </p>
        </div>

        {/* Dynamic Results Counter */}
        <div className="flex items-center gap-3">
          <div className="bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-semibold px-4 py-2.5 rounded-2xl border border-sky-100 dark:border-sky-900/60 text-sm shadow-sm">
            Mostrando <span className="font-extrabold text-sky-900 dark:text-sky-100">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
          </div>

          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden inline-flex items-center gap-2 bg-slate-900 dark:bg-sky-600 text-white px-4 py-2.5 rounded-2xl text-sm font-medium shadow-md"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Sidebar Filters + Property Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Sidebar / Panel de Filtros Avanzados */}
        <aside 
          className={`lg:block ${
            isMobileFilterOpen ? 'block' : 'hidden'
          } bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl lg:shadow-sm space-y-6 sticky top-24 z-30 transition-colors`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Filter className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Filtros Avanzados</span>
            </h2>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-semibold flex items-center gap-1 transition-colors"
                title="Limpiar todos los filtros"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Limpiar</span>
              </button>
            )}
          </div>

          {/* 1. Búsqueda por Texto */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Palabra Clave / Barrio
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Ej. Palermo, Belgrano, Penthouse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
            </div>
          </div>

          {/* 2. Operación */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Operación
            </label>
            <div className="grid grid-cols-3 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              {['Todos', 'Venta', 'Alquiler'].map((op) => (
                <button
                  key={op}
                  type="button"
                  onClick={() => setOperation(op)}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                    operation === op
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Tipo de Propiedad */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tipo de Inmueble
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
            >
              <option value="Todos">Todos los tipos</option>
              <option value="Departamento">Departamento</option>
              <option value="Casa">Casa</option>
              <option value="PH">PH</option>
              <option value="Oficina">Oficina</option>
            </select>
          </div>

          {/* 4. Precio Máximo */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Presupuesto Máximo (USD)
            </label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
            >
              <option value="">Cualquier valor</option>
              <option value="1500">Hasta USD 1.500 / mes</option>
              <option value="200000">Hasta USD 200.000</option>
              <option value="350000">Hasta USD 350.000</option>
              <option value="600000">Hasta USD 600.000</option>
            </select>
          </div>

          {/* 5. Cantidad de Dormitorios */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Dormitorios Mínimos
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: 'Cualquiera', val: '0' },
                { label: '1+', val: '1' },
                { label: '2+', val: '2' },
                { label: '3+', val: '3' }
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setMinBedrooms(item.val)}
                  className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                    minBedrooms === item.val
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Filters CTA Button */}
          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-2.5 rounded-xl text-xs transition-colors pt-3 border border-slate-200 dark:border-slate-700"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restablecer Filtros</span>
            </button>
          )}
        </aside>

        {/* Grilla Principal de Propiedades */}
        <main className="lg:col-span-3">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-sm my-4">
              <div className="w-16 h-16 bg-amber-50 dark:bg-amber-950/40 text-amber-500 rounded-full flex items-center justify-center mx-auto">
                <Frown className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">No encontramos coincidencias</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
                No hay resultados para los parámetros seleccionados. Intentá ampliar tu búsqueda o limpiar los filtros.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shadow-md"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Limpiar Filtros y Mostrar Todo</span>
              </button>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
