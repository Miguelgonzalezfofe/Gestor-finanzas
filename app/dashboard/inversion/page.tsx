import React from 'react';

export default function page() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        
        {/* Header con Rendimiento Total */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Inversiones</h2>
            <p className="text-gray-500">Tu portafolio ha crecido un <span className="text-emerald-500 font-bold">+14.2%</span> este año.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
              Analizar Riesgo
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
              + Invertir capital
            </button>
          </div>
        </div>

        {/* Resumen de Cartera */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-400 uppercase">Valor de Mercado</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">$18,250.40</h3>
            <p className="text-xs text-emerald-500 mt-2 font-bold">▲ $2,100 (Ganancia total)</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-400 uppercase">Rendimiento Mensual</p>
            <h3 className="text-3xl font-bold text-indigo-600 mt-1">5.8%</h3>
            <p className="text-xs text-gray-400 mt-2 italic font-medium">Superando al mercado (S&P 500)</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-400 uppercase">Riesgo del Perfil</p>
            <div className="flex items-center mt-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">Moderado-Alto</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gráfico / Distribución de Activos */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-6">Composición del Portafolio</h4>
            <div className="space-y-4">
              {/* Simulación de barras de activos */}
              {[
                { label: 'Acciones (Stocks)', val: '45%', color: 'bg-indigo-500', amount: '$8,212' },
                { label: 'Criptomonedas', val: '30%', color: 'bg-orange-400', amount: '$5,475' },
                { label: 'Bonos / Renta Fija', val: '15%', color: 'bg-emerald-400', amount: '$2,737' },
                { label: 'Efectivo (Cash)', val: '10%', color: 'bg-gray-300', amount: '$1,826' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1 font-medium">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-gray-900 font-bold">{item.amount} <span className="text-gray-400 font-normal">({item.val})</span></span>
                  </div>
                  <div className="w-full bg-gray-50 h-3 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all`} style={{ width: item.val }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mejores Activos (Top Performers) */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-4">Mejor Rendimiento</h4>
            <div className="divide-y divide-gray-50">
              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-lg">🍎</div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-800">Apple (AAPL)</p>
                    <p className="text-[10px] text-gray-400">Acción</p>
                  </div>
                </div>
                <span className="text-emerald-500 font-bold text-sm">+24.5%</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg">₿</div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-800">Bitcoin</p>
                    <p className="text-[10px] text-gray-400">Cripto</p>
                  </div>
                </div>
                <span className="text-emerald-500 font-bold text-sm">+18.2%</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-lg">☁️</div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-gray-800">Microsoft</p>
                    <p className="text-[10px] text-gray-400">Acción</p>
                  </div>
                </div>
                <span className="text-red-500 font-bold text-sm">-2.1%</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition">
              Ver detalle de activos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
