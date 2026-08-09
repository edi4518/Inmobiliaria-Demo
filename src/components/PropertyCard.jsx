import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, ArrowRight } from 'lucide-react';

export default function PropertyCard({ property }) {
  const { id, title, priceFormatted, location, operation, type, bedrooms, bathrooms, area, image } = property;

  const isVenta = operation === 'Venta';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-sky-500/20 dark:hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full">
      {/* Top Image & Floating Badge */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span 
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-sm ${
              isVenta ? 'bg-sky-600/90' : 'bg-emerald-600/90'
            }`}
          >
            {operation}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-white backdrop-blur-sm shadow-md">
            {type}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
            {title}
          </h3>
        </div>

        {/* Property Specs */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium bg-slate-50/50 dark:bg-slate-800/50 rounded-xl px-2">
          <div className="flex items-center justify-center gap-1.5" title="Dormitorios">
            <Bed className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>{bedrooms > 0 ? `${bedrooms} Dórm.` : 'S/D'}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5" title="Baños">
            <Bath className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>{bathrooms} Baños</span>
          </div>
          <div className="flex items-center justify-center gap-1.5" title="Superficie">
            <Maximize className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>{area} m²</span>
          </div>
        </div>

        {/* Price & CTA Button */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Valor</span>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {priceFormatted}
            </span>
          </div>

          <Link
            to={`/propiedad/${id}`}
            className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all duration-200"
          >
            <span>Ver Detalle</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
