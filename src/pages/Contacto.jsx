import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, 
  Calculator, Building2, HelpCircle, ExternalLink, ShieldCheck 
} from 'lucide-react';

export default function Contacto() {
  const [requestType, setRequestType] = useState('tasacion'); // 'general' | 'tasacion'
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    // Campos condicionales de tasación
    tipoInmueble: 'Departamento',
    tipoOperacion: 'Venta',
    barrio: '',
    ambientes: '3',
    mensaje: ''
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tipoInmueble: 'Departamento',
      tipoOperacion: 'Venta',
      barrio: '',
      ambientes: '3',
      mensaje: ''
    });
  };

  const isTasacion = requestType === 'tasacion';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 uppercase tracking-wider inline-flex items-center gap-1.5">
          <Calculator className="w-4 h-4" /> Atención al Cliente & Tasaciones
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Ponete en contacto con nuestro equipo
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Solicitá la tasación profesional de tu inmueble o hacenos cualquier consulta. Estamos para asesorarte.
        </p>
      </div>

      {/* Grid de Contenido Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* 1. INFORMACIÓN DE CONTACTO & DATOS ÚTILES */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-8 shadow-xl border border-slate-800">
            <h3 className="text-xl font-bold border-b border-slate-800 pb-4 text-white">
              HogarUrban Real Estate
            </h3>

            <ul className="space-y-6 text-slate-300 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Oficinas Centrales</strong>
                  <span className="text-slate-300 text-xs">Av. Libertador 4580, Piso 8, CABA</span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Teléfonos de Atencion</strong>
                  <span className="text-slate-300 text-xs">+54 (11) 4567-8900 / +54 (11) 4567-8901</span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Correo Electrónico</strong>
                  <a href="mailto:contacto@hogarurban.com" className="text-sky-400 hover:underline text-xs">
                    contacto@hogarurban.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-white font-semibold mb-0.5">Horarios de Atención</strong>
                  <span className="text-slate-300 text-xs block">Lun a Vie: 9:00 a 19:00 hs</span>
                  <span className="text-slate-300 text-xs block">Sábados: 10:00 a 14:00 hs</span>
                </div>
              </li>
            </ul>

            {/* Links a Google Maps & WhatsApp */}
            <div className="pt-2 space-y-3">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-slate-300 bg-slate-800 hover:bg-slate-700/80 p-3.5 rounded-xl border border-slate-700 transition-colors"
              >
                <span className="font-semibold">Ver ubicación en Google Maps</span>
                <ExternalLink className="w-4 h-4 text-sky-400" />
              </a>
            </div>
          </div>

          {/* Tarjeta de Garantía CUCICBA */}
          <div className="bg-sky-50 border border-sky-100 p-5 rounded-3xl flex items-center gap-3 text-sky-900">
            <ShieldCheck className="w-8 h-8 text-sky-600 shrink-0" />
            <div className="text-xs">
              <span className="font-bold block text-sky-950">Martilleros Matriculados</span>
              <span>CUCICBA N° 7842 / N° 6540. Respaldo y ética legal garantizados.</span>
            </div>
          </div>
        </div>

        {/* 2. FORMULARIO DE CONSULTA / TASACIÓN */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          
          {/* Selector de Tipo de Solicitud (Consulta vs Tasación) */}
          <div className="flex flex-col sm:flex-row gap-2 bg-slate-100 p-1.5 rounded-2xl">
            <button
              type="button"
              onClick={() => setRequestType('tasacion')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                requestType === 'tasacion'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Solicitar Tasación de mi Propiedad</span>
            </button>

            <button
              type="button"
              onClick={() => setRequestType('general')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                requestType === 'general'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Consulta General</span>
            </button>
          </div>

          {/* Estado Enviado exitosamente */}
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {isTasacion ? '¡Solicitud de Tasación Recibida!' : '¡Consulta Enviada con Éxito!'}
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                {isTasacion 
                  ? 'Un corredor especialista en la zona evaluará los datos de tu inmueble y te contactará a la brevedad para fijar una inspección presencial o virtual.' 
                  : 'Gracias por comunicarte con HogarUrban. Te responderemos a la brevedad.'
                }
              </p>
              <button
                onClick={handleResetForm}
                className="mt-4 bg-sky-600 text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-sky-700 transition-colors shadow-sm"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Datos de Contacto Obligatorios */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                  1. Datos Personales de Contacto
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Martín Pérez"
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 11 1234-5678"
                    value={formData.telefono}
                    onChange={(e) => handleChange('telefono', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                  />
                </div>
              </div>

              {/* CAMPOS ADICIONALES DE TASACIÓN (Condicionales) */}
              {isTasacion && (
                <div className="space-y-4 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 border-b border-sky-100 pb-2">
                    2. Detalles del Inmueble a Tasar
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Tipo de Inmueble
                      </label>
                      <select
                        value={formData.tipoInmueble}
                        onChange={(e) => handleChange('tipoInmueble', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium bg-white"
                      >
                        <option value="Departamento">Departamento</option>
                        <option value="Casa">Casa</option>
                        <option value="PH">PH</option>
                        <option value="Terreno">Terreno / Lote</option>
                        <option value="Oficina">Oficina Comercial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Operación Deseada
                      </label>
                      <select
                        value={formData.tipoOperacion}
                        onChange={(e) => handleChange('tipoOperacion', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium bg-white"
                      >
                        <option value="Venta">Venta</option>
                        <option value="Alquiler">Alquiler</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Ubicación / Barrio
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Belgrano, Palermo, Olivos..."
                        value={formData.barrio}
                        onChange={(e) => handleChange('barrio', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Cantidad de Ambientes
                      </label>
                      <select
                        value={formData.ambientes}
                        onChange={(e) => handleChange('ambientes', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium bg-white"
                      >
                        <option value="1">1 Ambiente</option>
                        <option value="2">2 Ambientes</option>
                        <option value="3">3 Ambientes</option>
                        <option value="4">4 Ambientes</option>
                        <option value="5+">5 o más Ambientes</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Comentarios finales */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isTasacion ? 'Detalles o Estado del Inmueble' : 'Mensaje o Consulta'}
                </label>
                <textarea
                  rows={4}
                  placeholder={
                    isTasacion 
                      ? 'Escribí aquí si cuenta con cochera, balcón, antigüedad aproximada, etc.'
                      : 'Escribí tu consulta aquí...'
                  }
                  value={formData.mensaje}
                  onChange={(e) => handleChange('mensaje', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                ></textarea>
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-sky-600/20 transition-all text-sm"
              >
                <Send className="w-4 h-4" />
                <span>{isTasacion ? 'Solicitar Tasación Profesional' : 'Enviar Consulta'}</span>
              </button>
            </form>
          )}

        </div>
      </div>

      {/* 3. BOTÓN FLOTANTE / ACCESO RÁPIDO A WHATSAPP */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Contacto Inmediato
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Preferís asesoramiento instantáneo?
          </h3>
          <p className="text-emerald-100 text-sm max-w-xl">
            Hablá directamente con un corredor de guardia por WhatsApp sin demoras.
          </p>
        </div>

        <a
          href="https://wa.me/5491112345678?text=Hola%20HogarUrban,%20quisiera%20hacer%20una%20consulta%20directa."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-emerald-900 font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg transition-all shrink-0 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 text-emerald-600 fill-current" />
          <span>Iniciar Chat WhatsApp</span>
        </a>
      </section>

    </div>
  );
}
