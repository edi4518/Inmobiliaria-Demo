import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { propertiesData } from '../data/properties';
import { 
  MapPin, Bed, Bath, Maximize, Calendar, ArrowLeft, MessageCircle, Mail, 
  Car, Compass, CheckCircle2, Building2, Send, ShieldCheck, Share2,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80";

export default function DetallePropiedad() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertiesData.find((p) => p.id === id) || propertiesData[0];
  const { 
    title, priceFormatted, location, operation, type, bedrooms, 
    bathrooms, parking, area, coveredArea, disposition, age, image, 
    gallery, images: propertyImages, description, amenities 
  } = property;

  // Resolve array of images (from images, gallery, or fallback array)
  const images = (propertyImages && propertyImages.length > 0)
    ? propertyImages
    : (gallery && gallery.length > 0)
      ? gallery
      : [image || FALLBACK_IMAGE];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-semibold text-sm transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al catálogo de propiedades</span>
        </button>

        <div className="flex items-center gap-3">
          <button 
            type="button" 
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
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

        {/* 2. Galería de Fotos - Carrusel / Slider Interactivo */}
        <div className="space-y-4">
          {/* Visor Principal con Flechas */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 group">
            <img
              src={images[currentImageIndex]}
              alt={`${title} - Imagen ${currentImageIndex + 1}`}
              onError={handleImageError}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />

            {/* Controles de Navegación (Solo si hay más de 1 imagen) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  type="button"
                  aria-label="Imagen anterior"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  type="button"
                  aria-label="Siguiente imagen"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                {/* Contador / Badge de imágenes */}
                <div className="absolute bottom-4 right-4 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border border-slate-700/50">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Galería de Miniaturas Inferiores */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  type="button"
                  className={`relative h-20 w-28 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentImageIndex === index ? 'border-sky-500 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Miniatura ${index + 1}`} 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          )}
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

            {/* Descripción */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Descripción de la Propiedad
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {description}
              </p>
            </div>

            {/* Amenities / Características */}
            {amenities && amenities.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                  Amenities & Comodidades
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {amenities.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar / Formulario de Contacto Asesor */}
          <div className="space-y-6">
            <div className="bg-[#0f172a] text-white p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl border border-slate-800 sticky top-24">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                <div className="w-14 h-14 bg-sky-500/20 text-sky-400 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0 border border-sky-500/30">
                  HU
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">HogarUrban Real Estate</h3>
                  <span className="text-xs text-sky-400 font-medium block">Asesor Inmobiliario Oficial</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Matrícula CUCICBA N° 7842</span>
                </div>
              </div>

              {/* Botón Acción Directa WhatsApp */}
              <a
                href={`https://wa.me/5491112345678?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink mx-3 text-slate-500 text-xs uppercase font-semibold">o enviá un correo</span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/60 border border-emerald-700/60 p-4 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                  <p className="text-xs text-emerald-200 font-semibold">
                    ¡Mensaje recibido! Te contactaremos a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre..."
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      required
                      placeholder="Tu número..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Mensaje</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Quisiera coordinar una visita..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-sky-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-xl transition-colors text-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta por Email</span>
                  </button>
                </form>
              )}

              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Atención confidencial y personalizada</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
