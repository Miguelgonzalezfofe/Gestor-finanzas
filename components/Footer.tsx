import { Wallet, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

function Footer() {

  return (
    <footer className="w-full pt-10 border-t border-gray-700 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tighter">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              FINANZAS PRO
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Transformando la ansiedad financiera en libertad. Gestiona tus inversiones, 
              ahorra para tu jubilación y toma el control total de tu capital.
            </p>
            <div className="flex gap-4 text-slate-400">
              <Github className="h-5 w-5 hover:text-blue-600 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-blue-600 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold  text-sm uppercase tracking-widest">Producto</h4>
            <ul className="space-y-2 text-sm text-slate-500 font-medium">
              <li className="hover:text-blue-600 transition-colors"><Link href="#features">Funciones</Link></li>
              <li className="hover:text-blue-600 transition-colors"><Link href="#pricing">Precios</Link></li>
              <li className="hover:text-blue-600 transition-colors"><Link href="/metas">Metas de Ahorro</Link></li>
              <li className="hover:text-blue-600 transition-colors"><Link href="/blog">Blog Financiero</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold  text-sm uppercase tracking-widest">Recursos</h4>
            <ul className="space-y-2 text-sm text-slate-500 font-medium">
              <li className="hover:text-blue-600 transition-colors"><Link href="/docs">Documentación</Link></li>
              <li className="hover:text-blue-600 transition-colors"><Link href="/help">Centro de Ayuda</Link></li>
              <li className="hover:text-blue-600 transition-colors"><Link href="/seguridad">Seguridad</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold  text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500 font-medium">
              <li className="hover:text-blue-600 transition-colors"><Link href="/privacy">Privacidad</Link></li>
              <li className="hover:text-blue-600 transition-colors"><Link href="/terms">Términos</Link></li>
              <li className="hover:text-blue-600 transition-colors"><Link href="/cookies">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            © {2026} Finanzas Pro. Todos los derechos reservados.
          </p>
          <p className="text-slate-400 text-xs flex items-center gap-1 font-medium">
            Hecho con <span className="text-red-500">❤️</span> para tu libertad financiera.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;