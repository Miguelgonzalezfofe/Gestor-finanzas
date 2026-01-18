function page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
  <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-600">FinanzasApp</h1>
    </div>
    <nav className="flex-1 px-4 space-y-2">
      <a href="#" className="flex items-center p-3 bg-indigo-50 text-indigo-700 rounded-lg font-semibold">
        <span className="mr-3">📊</span> Dashboard
      </a>
      <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
        <span className="mr-3">💸</span> Gastos
      </a>
      <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
        <span className="mr-3">📈</span> Inversiones
      </a>
      <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
        <span className="mr-3">💳</span> Deudas
      </a>
    </nav>
  </aside>

  <main className="flex-1 p-8">
    <header className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Hola, Usuario 👋</h2>
        <p className="text-gray-500">Aquí tienes el resumen de tu dinero hoy.</p>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
        + Nuevo Registro
      </button>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Saldo Total</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">$12,450.00</h3>
        <span className="text-xs text-green-500 font-semibold">+2.4% vs mes anterior</span>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Gastos del Mes</p>
        <h3 className="text-3xl font-bold text-red-500 mt-1">$3,120.50</h3>
        <div className="w-full bg-gray-100 h-2 rounded-full mt-3">
          <div className="bg-red-400 h-2 rounded-full w-[65%]" ></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Inversiones</p>
        <h3 className="text-3xl font-bold text-emerald-600 mt-1">$5,800.00</h3>
        <span className="text-xs text-emerald-500 font-semibold">Rendimiento: 8.5%</span>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Deudas</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">$1,200.00</h3>
        <span className="text-xs text-orange-400 font-semibold">Próximo pago: 22 Ene</span>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[300px]">
        <h4 className="font-bold text-gray-800 mb-4">Ingresos vs Gastos</h4>
        <div className="h-64 flex items-end space-x-4">
          <div className="flex-1 bg-indigo-100 rounded-t-lg h-32"></div>
          <div className="flex-1 bg-indigo-600 rounded-t-lg h-48"></div>
          <div className="flex-1 bg-indigo-100 rounded-t-lg h-24"></div>
          <div className="flex-1 bg-indigo-600 rounded-t-lg h-56"></div>
          <div className="flex-1 bg-indigo-100 rounded-t-lg h-40"></div>
          <div className="flex-1 bg-indigo-600 rounded-t-lg h-64"></div>
        </div>
        <div className="flex justify-center mt-4 space-x-6 text-sm text-gray-500">
          <span className="flex items-center"><span className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span> Ingresos</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-indigo-100 rounded-full mr-2"></span> Gastos</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-gray-800 mb-4">Últimos Movimientos</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">🛒</div>
              <div className="ml-3 text-sm">
                <p className="font-bold text-gray-800">Supermercado</p>
                <p className="text-gray-400">Hace 2 horas</p>
              </div>
            </div>
            <span className="text-red-500 font-bold">-$85.00</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">💰</div>
              <div className="ml-3 text-sm">
                <p className="font-bold text-gray-800">Pago Nómina</p>
                <p className="text-gray-400">Ayer</p>
              </div>
            </div>
            <span className="text-green-500 font-bold">+$2,400.00</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center font-bold">🎬</div>
              <div className="ml-3 text-sm">
                <p className="font-bold text-gray-800">Netflix</p>
                <p className="text-gray-400">14 Ene</p>
              </div>
            </div>
            <span className="text-red-500 font-bold">-$12.99</span>
          </div>
        </div>
        <button className="w-full mt-6 py-2 text-sm text-indigo-600 font-semibold border border-indigo-100 rounded-lg hover:bg-indigo-50">
          Ver todo el historial
        </button>
      </div>
    </div>
  </main>
</div>
    </>
  )
}

export default page