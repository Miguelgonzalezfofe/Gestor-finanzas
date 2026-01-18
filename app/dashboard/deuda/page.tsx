
function page() {
 const deudas = [
    { id: 1, nombre: 'Tarjeta de Crédito Visa', total: 5000, pagado: 1200, tasa: '18%', vencimiento: '22 Ene', color: 'bg-red-500' },
    { id: 2, nombre: 'Préstamo Personal', total: 12000, pagado: 8500, tasa: '12%', vencimiento: '05 Feb', color: 'bg-indigo-500' },
    { id: 3, nombre: 'Crédito Automotriz', total: 25000, pagado: 15000, tasa: '8.5%', vencimiento: '15 Feb', color: 'bg-blue-500' },
  ];

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto ">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Gestión de Deudas</h2>
          <p className="text-gray-500">Tienes un plan activo para liquidar tus compromisos financieros.</p>
        </div>

        {/* Resumen General de Deuda */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Deuda Total Pendiente</p>
                <h3 className="text-4xl font-bold text-gray-900">$17,300.00</h3>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gray-400 uppercase">Progreso de Libertad</p>
                <p className="text-2xl font-bold text-indigo-600">58%</p>
              </div>
            </div>
            {/* Barra de progreso global */}
            <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden flex">
              <div className="bg-indigo-600 h-full" style={{ width: '58%' }}></div>
            </div>
            <div className="flex justify-between mt-3 text-xs font-medium text-gray-500">
              <span>Pagado: $24,700</span>
              <span>Total Inicial: $42,000</span>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex flex-col justify-center">
            <p className="text-orange-800 font-bold text-sm mb-2 flex items-center">
              <span className="mr-2">⚠️</span> Próximo Vencimiento
            </p>
            <h4 className="text-2xl font-bold text-orange-900">Tarjeta Visa</h4>
            <p className="text-orange-700 text-sm mt-1">Vence en <span className="font-bold text-orange-900">6 días</span></p>
            <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-xl font-bold text-sm hover:bg-orange-700 transition">
              Pagar $450.00 ahora
            </button>
          </div>
        </div>

        {/* Listado Detallado de Deudas */}
        <h4 className="font-bold text-gray-800 text-xl mb-6">Desglose por Entidad</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deudas.map((deuda) => {
            const porcentaje = Math.round((deuda.pagado / deuda.total) * 100);
            return (
              <div key={deuda.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="font-bold text-gray-800 text-lg">{deuda.nombre}</h5>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Tasa: {deuda.tasa} EA</p>
                  </div>
                  <span className="bg-gray-50 px-3 py-1 rounded-lg text-xs font-bold text-gray-500">
                    Vence: {deuda.vencimiento}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500 font-medium">Progreso de pago</span>
                  <span className="font-bold text-gray-800">{porcentaje}%</span>
                </div>
                
                <div className="w-full bg-gray-50 h-2 rounded-full overflow-hidden mb-4">
                  <div className={`${deuda.color} h-full`} style={{ width: `${porcentaje}%` }}></div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Restante</p>
                    <p className="text-lg font-bold text-gray-800">${(deuda.total - deuda.pagado).toLocaleString()}</p>
                  </div>
                  <button className="text-indigo-600 text-sm font-bold hover:underline">
                    Ver detalles
                  </button>
                </div>
              </div>
            );
          })}

          {/* Card para añadir nueva deuda */}
          <button className="border-2 border-dashed border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition group">
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">+</span>
            <span className="font-bold">Agregar nueva deuda</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page