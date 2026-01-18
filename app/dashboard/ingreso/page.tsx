import React from 'react'

function page() {
  return (
    <>
    <div className="min-h-screen p-4 md:p-8">
  <div className="max-w-5xl mx-auto">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-2 bg-emerald-600 rounded-3xl p-8 text-white shadow-xl shadow-emerald-100 flex justify-between items-center relative overflow-hidden">
        <div className="z-10">
          <p className="text-emerald-100 text-sm font-medium mb-1">Total Ingresado (Enero)</p>
          <h2 className="text-5xl font-bold">$5,420.00</h2>
          <div className="mt-4 flex items-center text-sm">
            <span className="bg-emerald-500 py-1 px-3 rounded-full font-bold">+12% vs dic</span>
          </div>
        </div>
        <div className="hidden sm:block z-10 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500 rounded-full opacity-50"></div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <h4 className="text-gray-500 text-sm font-bold mb-4 uppercase">Meta Mensual</h4>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-100">Progreso</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-emerald-600">85%</span>
            </div>
          </div>
          <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-emerald-50">
            <div className="shadow-none flex w-[85%] flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
          </div>
          <p className="text-gray-400 text-xs">Faltan <span className="text-gray-800 font-bold">$580.00</span> para tu objetivo de $6,000.</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <h3 className="font-bold text-gray-800 text-xl mb-4">Fuentes de Ingreso</h3>
        
        <div className="bg-white p-5 rounded-2xl flex items-center justify-between border border-gray-100 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-xl">🏢</div>
            <div className="ml-4">
              <p className="font-bold text-gray-800">Salario Mensual</p>
              <p className="text-sm text-gray-400">Empresa Tech S.A.</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-emerald-600">+$3,200.00</p>
            <p className="text-xs text-gray-400">Recibido el 01 Ene</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl flex items-center justify-between border border-gray-100 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">💻</div>
            <div className="ml-4">
              <p className="font-bold text-gray-800">Proyecto Freelance</p>
              <p className="text-sm text-gray-400">Diseño UI Dashboard</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-emerald-600">+$1,500.00</p>
            <p className="text-xs text-gray-400">Recibido el 10 Ene</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl flex items-center justify-between border border-gray-100 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 font-bold text-xl">💎</div>
            <div className="ml-4">
              <p className="font-bold text-gray-800">Dividendos</p>
              <p className="text-sm text-gray-400">Inversión SPY500</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-emerald-600">+$720.00</p>
            <p className="text-xs text-gray-400">Recibido el 15 Ene</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100">
        <h4 className="font-bold text-gray-800 mb-6">Distribución</h4>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Trabajo Fijo</span>
              <span className="font-bold">59%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[59%]" ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Freelance</span>
              <span className="font-bold">28%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[28%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Inversiones</span>
              <span className="font-bold">13%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full w-[13%]"></div>
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