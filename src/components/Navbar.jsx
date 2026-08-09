import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Building2, Sun, Moon, Menu, X, Calculator } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Propiedades', path: '/propiedades' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
        >
          <div className="w-11 h-11 bg-sky-600 group-hover:bg-sky-700 transition-colors rounded-xl flex items-center justify-center text-white shadow-md shadow-sky-600/20">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 dark:text-white font-bold text-xl leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              HogarUrban
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
              Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-semibold px-3 py-1.5 rounded-lg'
                  : 'text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Theme Toggle & Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            type="button"
            className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            title="Cambiar Modo Claro/Oscuro"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <Link 
            to="/contacto" 
            className="hidden sm:inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-sky-500/20"
          >
            <Calculator className="w-4 h-4 text-white" />
            <span className="text-white">Tasar Propiedad</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-semibold px-3 py-1.5 rounded-lg'
                    : 'text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <Link
              to="/contacto"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl shadow-md"
            >
              <Calculator className="w-5 h-5 text-white" />
              <span className="text-white">Tasar Propiedad</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
