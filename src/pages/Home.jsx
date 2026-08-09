import React from 'react';
import PropertyFilter from '../components/PropertyFilter';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-sky-500/30">
            HogarUrban Real Estate
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Encontrá el lugar donde <span className="text-sky-400">querés vivir</span>
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Explorá casas, departamentos, PHs y oficinas exclusivas. Asesoramiento profesional y transparencia garantizada.
          </p>
          
          {/* Buscador */}
          <div className="pt-6">
            <PropertyFilter />
          </div>
        </div>
      </section>

      {/* Sección Destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-sky-700 dark:text-sky-400 font-bold uppercase tracking-wider text-sm">Catálogo de Oportunidades</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Propiedades Destacadas</h2>
          </div>
          <Link to="/propiedades" className="text-sky-600 dark:text-sky-400 font-semibold hover:underline">
            Ver todas las propiedades &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
