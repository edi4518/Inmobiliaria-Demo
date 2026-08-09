import { 
  Building2, ShieldCheck, TrendingUp, Users, Award, 
  MessageCircle 
} from 'lucide-react';

export default function Nosotros() {
  const stats = [
    { label: 'Años de Trayectoria', value: '+15', subtext: 'Liderando el mercado inmobiliario' },
    { label: 'Propiedades Vendidas', value: '+1.200', subtext: 'Operaciones concretadas con éxito' },
    { label: 'Clientes Satisfechos', value: '98%', subtext: 'Calificación excelente en reseñas' },
    { label: 'Inmuebles en Cartera', value: '+250', subtext: 'Opciones vigentes de Venta y Alquiler' },
  ];

  const values = [
    {
      icon: ShieldCheck,
      color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
      title: 'Seguridad Jurídica',
      description: 'Todas nuestras operaciones cuentan con revisión previa de títulos, estudio de dominios e inhibiciones por matriculados CUCICBA.'
    },
    {
      icon: TrendingUp,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      title: 'Innovación Digital',
      description: 'Implementamos tours virtuales 360°, fotos de dron en alta resolución y valoración técnica algorítmica para optimizar tiempos.'
    },
    {
      icon: Users,
      color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
      title: 'Atención Personalizada',
      description: 'Asignamos un corredor especializado según el barrio y tipo de inmueble para brindarte seguimiento continuo y confidencial.'
    },
    {
      icon: Award,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
      title: 'Compromiso e Integridad',
      description: 'Priorizamos la honestidad en cada tasación y la ética profesional en el trato con propietarios, compradores e inquilinos.'
    }
  ];

  const teamMembers = [
    {
      name: 'Lic. Gonzalo Fernández',
      role: 'Socio Fundador & Corredor Inmobiliario',
      matricula: 'CUCICBA N° 6540',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dra. Mariana Benítez',
      role: 'Directora de Tasaciones & Asesoría Legal',
      matricula: 'CUCICBA N° 7842',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Ing. Lucas Rossi',
      role: 'Líder de Desarrollo & Emprendimientos',
      matricula: 'CUCICBA N° 8129',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Lic. Sofía Martínez',
      role: 'Asesora Comercial - Residencial Norte',
      matricula: 'CUCICBA N° 9015',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO INSTITUCIONAL */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <Building2 className="w-4 h-4" /> Trayectoria e Integridad Inmobiliaria
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Construyendo confianza y uniendo historias <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-200">
              desde hace más de 15 años
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            HogarUrban Real Estate nació con el firme propósito de profesionalizar el mercado inmobiliario mediante un servicio transparente, empático y orientado a la excelencia técnica.
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN MÉTRICAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:shadow-sky-500/10 transition-all text-center space-y-2 group"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform block tracking-tight">
                {stat.value}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{stat.label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VALORES DE LA EMPRESA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">Filosofía Institucional</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nuestros Valores Fundamentales
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Los principios que guían cada negociación, tasación e intermediación comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:shadow-sky-500/10 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${val.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{val.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. EQUIPO DE MARTILLEROS */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800 dark:border-slate-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Equipo Profesional</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Corredores Inmobiliarios Matriculados
            </h2>
            <p className="text-slate-400 text-sm">
              Conocé a las personas que cuidarán tu inversión y gestionarán tus propiedades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/90 dark:bg-slate-900/90 rounded-3xl border border-slate-700/80 dark:border-slate-800 overflow-hidden shadow-lg hover:border-sky-500/50 transition-all flex flex-col group"
              >
                <div className="h-64 w-full overflow-hidden bg-slate-700 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-slate-950/80 text-sky-400 px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-md">
                    {member.matricula}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 font-medium">{member.role}</p>
                  </div>

                  <a
                    href={`https://wa.me/5491112345678?text=Hola%20${encodeURIComponent(member.name)},%20quisiera%20hacerle%20una%20consulta.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-700 dark:bg-slate-800 hover:bg-sky-600 dark:hover:bg-sky-600 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Contactar Asesor</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
