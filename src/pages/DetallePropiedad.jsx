import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { propertiesData } from '../data/properties';
import { 
  MapPin, Bed, Bath, Maximize, Calendar, ArrowLeft, MessageCircle, Mail, 
  Car, Compass, CheckCircle2, Building2, Send, ShieldCheck, Share2 
} from 'lucide-react';

export default function DetallePropiedad() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertiesData.find((p) => p.id === id) || propertiesData[0];
  const { 
    title, priceFormatted, location, operation, type, bedrooms, 
    bathrooms, parking, area, coveredArea, disposition, age, image, 
    gallery, description, amenities 
  } = property;

  const imageList = gallery && gallery.length > 0 ? gallery : [image];
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola HogarUrban, estoy interesado/a en la propiedad "${title}" (ID: #${property.id}) publicada en ${priceFormatted}. Quisiera más información.`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Bar Navigation & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => navigate('/propiedades')}
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-semibold text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al catálogo de propiedades</span>
        </button>

        <div className="flex items-center gap-3">
          <button 
            type="button" 
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-xs font-semibold flex items-center gap-1.5"
            onClick={() => alert('Enlace copiado al portapapeles')}
          >
            <Share2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 md:p-10 shadow-sm space-y-8 transition-colors">
        
        {/* 1. Header & Price */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 text-xs font-extrabold rounded-full uppercase tracking-wider text-white shadow-sm ${
                operation === 'Venta' ? 'bg-sky-600' : 'bg-emerald-600'
              }`}>
                {operation}
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                {type}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">ID: #{property.id}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              {title}
            </h1>
            
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>{location}</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shrink-0 text-left md:text-right">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-400 font-bold block mb-0.5">
              Valor de Publicación
            </span>
            <span className="text-3xl sm:text-4xl font-black text-sky-600 dark:text-sky-400 tracking-tight">
              {priceFormatted}
            </span>
          </div>
        </div>

        {/* 2. Galería de Fotos */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-inner">
            <div className="md:col-span-2 h-full bg-slate-100 dark:bg-slate-800 relative group overflow-hidden">
              <img 
                src={selectedImage} 
                alt={title}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            <div className="hidden md:grid grid-rows-3 gap-4 h-full">
              {imageList.slice(1, 4).map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`h-full w-full overflow-hidden rounded-2xl border-2 transition-all relative ${
                    selectedImage === imgUrl ? 'border-sky-600 scale-[0.98]' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex md:hidden gap-3 overflow-x-auto pb-2">
            {imageList.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(imgUrl)}
                className={`w-20 h-16 rounded-xl overflow-hidden border-2 shrink-0 ${
                  selectedImage === imgUrl ? 'border-sky-600' : 'border-transparent opacity-70'
                }`}
              >
                <img src={imgUrl} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 3. Specs Sheet & Agent Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Ficha Técnica */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Ficha Técnica del Inmueble
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm border border-slate-100 dark:border-slate-700">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold block">Dormitorios</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{bedrooms > 0 ? `${bedrooms} Ambs.` : 'Monoamb.'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm border border-slate-100 dark:border-slate-700">
                    <Bath className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold block">Baños</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{bathrooms}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm border border-slate-100 dark:border-slate-700">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold block">Cocheras</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{parking > 0 ? `${parking} Fija` : 'Sin cochera'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm border border-slate-100 dark:border-slate-700">
                    <Maximize className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold block">Sup. Total</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{area} m²</span>
                  </div>
                </div>

                {coveredArea && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm border border-slate-100 dark:border-slate-700">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold block">Sup. Cubierta</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{coveredArea} m²</span>
                    </div>
                  </div>
                )}

                {disposition && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm border border-slate-100 dark:border-slate-700">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold block">Disposición</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{disposition}</span>
                    </div>
                  </div>
                )}

                {age && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-sm border border-slate-100 dark:border-slate-700">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold block">Antigüedad</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{age}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Descripción Completa */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Descripción y Detalles
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed whitespace-pre-line font-normal">
                {description}
              </p>
            </div>

            {/* Comodidades & Amenities */}
            {amenities && amenities.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Comodidades y Servicios</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tarjeta Lateral de Contacto */}
          <div className="space-y-6 sticky top-24">
            <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-3xl space-y-6 shadow-xl border border-slate-800 dark:border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  HU
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Asesor de HogarUrban</h3>
                  <span className="text-xs text-sky-400 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" /> Corredor Matriculado
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="bg-slate-800 p-4 rounded-2xl text-center space-y-2 text-slate-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="font-bold text-sm text-white">¡Consulta Enviada!</p>
                  <p className="text-xs text-slate-400">Un corredor inmobiliario se comunicará con vos en breve.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
                    Consulta Rápida sobre la propiedad
                  </span>
                  
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Tu teléfono / WhatsApp"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />

                  <textarea
                    rows={3}
                    placeholder="Quisiera coordinar una visita..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 rounded-xl shadow-md transition-all text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Formulario</span>
                  </button>
                </form>
              )}

              <div className="pt-2">
                <a
                  href={`https://wa.me/5491112345678?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
