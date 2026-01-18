"use client"
import React, { useState } from 'react';

const Configuracion: React.FC = () => {
  const [currency, setCurrency] = useState('USD');
  const [budget, setBudget] = useState(2000);
  const [incognito, setIncognito] = useState(false);

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Ajustes</h2>
          <p className="text-gray-500">Personaliza tu experiencia y gestiona tus preferencias financieras.</p>
        </header>

        <div className="space-y-6">
          
          {/* SECCIÓN: PERFIL */}
          <section className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">👤</span> Información del Perfil
            </h3>
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-white shadow-md">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-border border border-gray-100 text-xs">📸</button>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Nombre Completo</label>
                  <input type="text" defaultValue="John Doe" className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Correo Electrónico</label>
                  <input type="email" defaultValue="john@ejemplo.com" className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: PREFERENCIAS FINANCIERAS */}
          <section className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">💰</span> Preferencias Financieras
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Selector de Moneda */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Moneda Principal</label>
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="USD">USD - Dólar Estadounidense</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="MXN">MXN - Peso Mexicano</option>
                  <option value="ARS">ARS - Peso Argentino</option>
                </select>
              </div>

              {/* Límite de Presupuesto */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Presupuesto Mensual Sugerido</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400 font-bold">$</span>
                  <input 
                    type="number" 
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full bg-gray-50 border-none rounded-xl p-3 pl-8 text-sm focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: PRIVACIDAD Y SEGURIDAD */}
          <section className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">🔒</span> Privacidad y Seguridad
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div>
                  <p className="font-bold text-gray-800 text-sm">Modo Incógnito</p>
                  <p className="text-xs text-gray-500">Ocultar saldos y montos en el dashboard principal.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={incognito} onChange={() => setIncognito(!incognito)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl text-red-600 cursor-pointer hover:bg-red-50 transition">
                <div>
                  <p className="font-bold text-sm">Eliminar todos los datos</p>
                  <p className="text-[10px] opacity-70 font-bold uppercase">Esta acción no se puede deshacer</p>
                </div>
                <span>🗑️</span>
              </div>
            </div>
          </section>

          <div className="flex justify-end gap-4 pt-4">
            <button className="px-6 py-3 text-gray-500 font-bold hover:text-gray-700">Descartar</button>
            <button className="px-10 py-3 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;