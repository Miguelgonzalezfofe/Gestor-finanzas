"use client"
import { ThemeToggle } from '@/components/theme-toggle';
import { NavItem } from '@/components/ui/Navtem';

import router from 'next/router';
import React, { useState } from 'react';



interface LayoutProps {
  views: {
    dashboard: React.ReactNode;
    gastos: React.ReactNode;
    ingresos: React.ReactNode;
    inversiones: React.ReactNode;
    deudas: React.ReactNode;
  }
}
const DashboardLayout: React.FC<LayoutProps> = ({views}) => {
  // Estado para manejar la navegación simple
  const [currentView, setCurrentView] = useState<keyof typeof views>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return views.dashboard ;
      case 'gastos': return views.gastos;
      case 'ingresos': return views.ingresos ;
      case 'inversiones': return views.inversiones ;
      case 'deudas': return views.deudas ;
      default: return <div className="p-8">Selecciona una opción</div>;
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'ingresos', label: 'Ingresos', icon: '💰' },
    { id: 'gastos', label: 'Gastos', icon: '💸' },
    { id: 'inversiones', label: 'Inversiones', icon: '📈' },
    { id: 'deudas', label: 'Deudas', icon: '💳' },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">
      
      {/* SIDEBAR - Escritorio */}
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border transition-colors">
    <div className="p-6">
      <div className="flex items-center gap-2">
        {/* Usamos el color primary de shadcn para el logo */}
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-sm">
          F
        </div>
        <h1 className="text-xl font-bold tracking-tight">FinanzasPro</h1>
      </div>
      <ThemeToggle />
    </div>
    <nav className="flex-1 px-4 py-4 space-y-1">
      {navItems.map((item) => (
        <NavItem 
          key={item.id}
          item={item}
          isActive={currentView === item.id}
          onClick={() => setCurrentView(item.id as any)}
        />
      ))}
    </nav>

    {/* Sección de Usuario - Adaptada a shadcn */}
    <div className="p-4 border-t border-border">
      <div className="bg-muted/50 rounded-2xl p-4">
        <p className="text-[10px] text-muted-foreground font-bold uppercase mb-2 tracking-wider">
          Usuario Premium
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
            JD
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">John Doe</p>
            <p className="text-[10px] text-muted-foreground truncate">john@ejemplo.com</p>
          </div>
        </div>
      </div>
    </div>
    </aside>

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Navbar superior para Móvil */}
        <header className="md:hidden bg-card border-b border-border p-4 flex justify-between items-center">
          <h1 className="font-bold text-indigo-600">FinanzasPro</h1>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-gray-100 rounded-lg"
          >
            ☰
          </button>
        </header>

        {/* Contenido Dinámico */}
        <main className="flex-1 overflow-y-auto focus:outline-none scrollbar-hide">
          {renderContent()}
        </main>
      </div>

      {/* Menú Móvil Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <nav className="fixed top-0 left-0 bottom-0 w-64 bg-white p-6 shadow-xl flex flex-col">
            <h2 className="text-xl font-bold mb-8 text-indigo-600">Menú</h2>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setCurrentView(item.id as any); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-bold ${
                    currentView === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;