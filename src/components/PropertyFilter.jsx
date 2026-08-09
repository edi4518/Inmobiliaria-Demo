import { Search, Building, RefreshCw, SlidersHorizontal, MapPin } from 'lucide-react';

export default function PropertyFilter({ filters, onFilterChange, onReset }) {
  const handleOperationClick = (op) => {
    onFilterChange('operation', op);
  };

  const handleTypeChange = (e) => {
    onFilterChange('type', e.target.value);
  };

  const handleLocationChange = (e) => {
    onFilterChange('location', e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    onFilterChange('maxPrice', e.target.value);
  };

  const hasActiveFilters = filters.operation !== 'Todos' || filters.type !== 'Todos' || filters.location !== '' || filters.maxPrice !== '';

  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-2xl dark:shadow-sky-950/40 border border-slate-100/80 dark:border-slate-800 max-w-4xl mx-auto text-slate-800 dark:text-slate-100 space-y-4 transition-all">
      {/* Operation Tabs (Todos, Venta, Alquiler) */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-2xl w-full sm:w-auto">
          {['Todos', 'Venta', 'Alquiler'].map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => handleOperationClick(op)}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filters.operation === op
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
              }`}
            >
              {op === 'Todos' ? 'Todas las Operaciones' : op}
            </button>
          ))}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-medium px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Limpiar Filtros</span>
          </button>
        )}
      </div>

      {/* Filter Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {/* Selector Tipo de Inmueble */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Building className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            Tipo de Inmueble
          </label>
          <select
            value={filters.type}
            onChange={handleTypeChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
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
              value={filters.location}
              onChange={handleLocationChange}
              className="w-full pl-3.5 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
            />
            {filters.location && (
              <button
                onClick={() => onFilterChange('location', '')}
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
            value={filters.maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
          >
            <option value="">Sin límite de precio</option>
            <option value="200000">Hasta USD 200.000</option>
            <option value="350000">Hasta USD 350.000</option>
            <option value="550000">Hasta USD 550.000</option>
          </select>
        </div>
      </div>

      {/* Mobile Reset Button */}
      {hasActiveFilters && (
        <div className="sm:hidden pt-2">
          <button
            type="button"
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 font-medium py-2 rounded-xl"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restablecer Filtros</span>
          </button>
        </div>
      )}
    </div>
  );
}
