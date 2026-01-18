function page() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
  <div className="max-w-5xl mx-auto">
    
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Mis Gastos</h2>
        <p className="text-gray-500">Has realizado <span className="font-bold text-indigo-600">42 transacciones</span> este mes.</p>
      </div>
      
      <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
        <button className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg shadow-sm">Mes</button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Semana</button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Año</button>
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
        <input type="text" placeholder="Buscar gasto..." className="w-full pl-10 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <select className="bg-white border-none rounded-2xl shadow-sm px-6 py-3 text-gray-600 outline-none focus:ring-2 focus:ring-indigo-500">
        <option>Todas las categorías</option>
        <option>🍔 Comida</option>
        <option>🚗 Transporte</option>
        <option>🏠 Hogar</option>
      </select>
    </div>

    <div className="space-y-8">
      
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center">
          Hoy <span className="ml-2 flex-1 h-px bg-gray-200"></span>
        </h4>
        
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition border-b border-gray-50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-xl">🍔</div>
              <div className="ml-4">
                <p className="font-bold text-gray-800">Restaurante La Parrilla</p>
                <p className="text-xs text-gray-400 font-medium">14:20 • Almuerzo de negocios</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800">-$24.50</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Efectivo</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl">🚗</div>
              <div className="ml-4">
                <p className="font-bold text-gray-800">Uber a Casa</p>
                <p className="text-xs text-gray-400 font-medium">08:15 • Transporte</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800">-$12.00</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Tarjeta Visa</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center">
          Ayer <span className="ml-2 flex-1 h-px bg-gray-200"></span>
        </h4>
        
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition border-b border-gray-50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-xl">🎬</div>
              <div className="ml-4">
                <p className="font-bold text-gray-800">Suscripción Netflix</p>
                <p className="text-xs text-gray-400 font-medium">Vencimiento mensual</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800">-$15.99</p>
              <p className="text-[10px] text-indigo-500 font-bold uppercase">Recurrente</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-xl">🛒</div>
              <div className="ml-4">
                <p className="font-bold text-gray-800">Supermercado Central</p>
                <p className="text-xs text-gray-400 font-medium">Compras semanales</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800">-$142.30</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Tarjeta Visa</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default page