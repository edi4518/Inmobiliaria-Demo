import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, Calculator, HelpCircle, CheckCircle2 } from 'lucide-react';

export const Contacto = () => {
  const [submitted, setSubmitted] = useState(false);
  const [requestType, setRequestType] = useState('tasacion');

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoInmueble: 'Departamento',
    tipoOperacion: 'Venta',
    barrio: '',
    ambientes: '3',
    mensaje: ''
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleResetForm = () => {
    setSubmitted(false);
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
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-sky-100 dark:bg-slate-800 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-slate-700 font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-sm mx-auto mb-3">
          <Calculator className="w-4 h-4 text-sky-700 dark:text-sky-400" />
          <span>Atención al Cliente & Tasaciones</span>
        </span>
        <h1 className="text-slate-900 dark:text-white font-extrabold text-3xl md:text-4xl text-center">
          Ponete en contacto con nuestro equipo
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-center text-base max-w-xl mx-auto mt-2">
          Solicitá la tasación profesional de tu inmueble o hacenos cualquier consulta. Estamos para asesorarte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Tarjetas Oscuras #0f172a */}
        <div className="space-y-6">
          <div className="bg-[#0f172a] text-white p-6 rounded-2xl shadow-xl border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">HogarUrban Real Estate</h2>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Oficinas Centrales</strong>
                  <span>Av. Libertador 4580, Piso 8, CABA</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Teléfonos de Atención</strong>
                  <span>+54 (11) 4567-8900</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Correo Electrónico</strong>
                  <span>contacto@hogarurban.com</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Horarios de Atención</strong>
                  <span className="block">Lun a Vie: 9:00 a 19:00 hs</span>
                  <span className="block">Sábados: 10:00 a 14:00 hs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caja Martilleros Matriculados #0f172a */}
          <div className="bg-[#0f172a] text-white p-6 rounded-2xl shadow-xl border border-slate-800 flex items-start gap-4">
            <ShieldCheck className="w-7 h-7 text-sky-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold text-base">Martilleros Matriculados</h3>
              <p className="text-slate-300 text-xs mt-1">CUCICBA N° 7842 / N° 6540. Respaldo y ética legal garantizados.</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario (bg-[#0f172a] text-white p-8 rounded-2xl shadow-xl border border-slate-800) */}
        <div className="lg:col-span-2 bg-[#0f172a] text-white p-8 rounded-2xl shadow-xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-700">
            <button
              type="button"
              onClick={() => setRequestType('tasacion')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                requestType === 'tasacion'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4 text-sky-400" />
              <span>Solicitar Tasación de mi Propiedad</span>
            </button>

            <button
              type="button"
              onClick={() => setRequestType('general')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                requestType === 'general'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-sky-400" />
              <span>Consulta General</span>
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-950/60 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {isTasacion ? '¡Solicitud de Tasación Recibida!' : '¡Consulta Enviada con Éxito!'}
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                {isTasacion 
                  ? 'Un corredor especialista en la zona evaluará los datos de tu inmueble y te contactará a la brevedad para fijar una inspección presencial o virtual.' 
                  : 'Gracias por comunicarte con HogarUrban. Te responderemos a la brevedad.'
                }
              </p>
              <button
                onClick={handleResetForm}
                className="mt-4 bg-sky-600 text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-sky-700 transition-colors shadow-sm cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              
              <div className="space-y-4">
                <h4 className="text-sky-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                  1. DATOS PERSONALES DE CONTACTO
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-200 font-semibold text-xs mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Martín Pérez"
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold text-xs mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold text-xs mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 11 1234-5678"
                    value={formData.telefono}
                    onChange={(e) => handleChange('telefono', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
                  />
                </div>
              </div>

              {isTasacion && (
                <div className="space-y-4 pt-2">
                  <h4 className="text-sky-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                    2. DETALLES DEL INMUEBLE A TASAR
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 font-semibold text-xs mb-1.5">
                        Tipo de Inmueble
                      </label>
                      <select
                        value={formData.tipoInmueble}
                        onChange={(e) => handleChange('tipoInmueble', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
                      >
                        <option value="Departamento">Departamento</option>
                        <option value="Casa">Casa</option>
                        <option value="PH">PH</option>
                        <option value="Terreno">Terreno / Lote</option>
                        <option value="Oficina">Oficina Comercial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-200 font-semibold text-xs mb-1.5">
                        Operación Deseada
                      </label>
                      <select
                        value={formData.tipoOperacion}
                        onChange={(e) => handleChange('tipoOperacion', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
                      >
                        <option value="Venta">Venta</option>
                        <option value="Alquiler">Alquiler</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 font-semibold text-xs mb-1.5">
                        Ubicación / Barrio
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Belgrano, Palermo, Olivos..."
                        value={formData.barrio}
                        onChange={(e) => handleChange('barrio', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-200 font-semibold text-xs mb-1.5">
                        Cantidad de Ambientes
                      </label>
                      <select
                        value={formData.ambientes}
                        onChange={(e) => handleChange('ambientes', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
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

              <div>
                <label className="block text-slate-200 font-semibold text-xs mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-sky-600/20 transition-all text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isTasacion ? 'Solicitar Tasación Profesional' : 'Enviar Consulta'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
