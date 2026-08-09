import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Building, RefreshCw, SlidersHorizontal, MapPin } from 'lucide-react';

export default function PropertyFilter({ 
  filters: propsFilters, 
  onFilterChange: propsOnFilterChange, 
  onReset: propsOnReset 
}) {
  const navigate = useNavigate();

  // Internal fallback state if props are not passed
  const [internalFilters, setInternalFilters] = useState({
    operation: 'Todos',
    type: 'Todos',
    location: '',
    maxPrice: ''
  });

  const filters = propsFilters || internalFilters;

  const handleFilterChange = (key, value) => {
    if (propsOnFilterChange) {
      propsOnFilterChange(key, value);
    }
    setInternalFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    if (propsOnReset) {
      propsOnReset();
    }
    setInternalFilters({
      operation: 'Todos',
      type: 'Todos',
      location: '',
      maxPrice: ''
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (filters.operation && filters.operation !== 'Todos' && filters.operation !== 'todas') {
      params.append('operacion', filters.operation);
    }
    if (filters.type && filters.type !== 'Todos' && filters.type !== 'todos') {
      params.append('tipo', filters.type);
    }
    if (filters.location && filters.location.trim() !== '') {
      params.append('ubicacion', filters.location.trim());
    }
    if (filters.maxPrice) {
      params.append('precioMax', filters.maxPrice);
    }

    const queryString = params.toString();
    navigate(queryString ? `/propiedades?${queryString}` : '/propiedades');
  };

  const currentOp = (filters.operation || 'Todos').toLowerCase();
  const isAll = currentOp === 'todos' || currentOp === 'todas';
  const isVenta = currentOp === 'venta';
  const isAlquiler = currentOp === 'alquiler';

  const hasActiveFilters = !isAll || (filters.type && filters.type !== 'Todos') || filters.location || filters.maxPrice;

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white dark:bg-slate-900 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-2xl dark:shadow-sky-950/40 border border-slate-100 dark:border-slate-800 max-w-4xl mx-auto text-slate-800 dark:text-slate-100 space-y-5 transition-colors"
    >
      {/* Operation Tabs (Todas las Operaciones, Venta, Alquiler) */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleFilterChange('operation', 'Todos')}
            className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isAll
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
            }`}
          >
            Todas las Operaciones
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('operation', 'Venta')}
            className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isVenta
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
            }`}
          >
            Venta
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('operation', 'Alquiler')}
            className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isAlquiler
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
            }`}
          >
            Alquiler
          </button>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleReset}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-medium px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Limpiar Filtros</span>
          </button>
        )}
      </div>

      {/* Filter Inputs Grid & Action Button */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end pt-1">
        {/* Selector Tipo de Inmueble */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Building className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Tipo de Inmueble
          </label>
          <select
            value={filters.type || 'Todos'}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full h-[42px] px-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
          >
            <option value="Todos">Todos los tipos</option>
            <option value="Departamento">Departamento</option>
            <option value="Casa">Casa</option>
            <option value="PH">PH</option>
            <option value="Oficina">Oficina</option>
          </select>
        </div>

        {/* Input Ubicación */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Ubicación
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Ej. Palermo, Belgrano..."
              value={filters.location || ''}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full h-[42px] pl-3.5 pr-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
            />
            {filters.location && (
              <button
                type="button"
                onClick={() => handleFilterChange('location', '')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Rango / Precio Máximo */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Precio Máximo (USD)
          </label>
          <select
            value={filters.maxPrice || ''}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-full h-[42px] px-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
          >
            <option value="">Sin límite de precio</option>
            <option value="200000">Hasta USD 200.000</option>
            <option value="350000">Hasta USD 350.000</option>
            <option value="550000">Hasta USD 550.000</option>
          </select>
        </div>

        {/* Submit Search Button Column */}
        <div className="flex flex-col justify-end">
          <button
            type="submit"
            className="h-[42px] px-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm"
          >
            <Search className="w-4 h-4" />
            <span>Buscar</span>
          </button>
        </div>
      </div>

      {/* Mobile Reset Button */}
      {hasActiveFilters && (
        <div className="sm:hidden pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 font-medium py-2 rounded-xl cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restablecer Filtros</span>
          </button>
        </div>
      )}
    </form>
  );
}
