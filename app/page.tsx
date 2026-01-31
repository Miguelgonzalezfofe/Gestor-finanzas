import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  CheckCircle2,
  Image as ImageIcon,
  Upload
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-16 lg:pt-15 lg:pb-24 border-b border-border">
        <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left">
            <Badge variant="secondary" className="w-fit px-4 py-1 gap-2 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Tu CFO personal, ahora en tu bolsillo
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Deja de adivinar <br /> 
              <span className="text-primary">Empieza a crecer.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[540px]">
              La forma más inteligente de trackear tus gastos, automatizar tus ahorros y alcanzar tu libertad financiera sin hojas de cálculo complejas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-xl h-14 px-8 font-bold text-lg shadow-lg shadow-primary/20">
                Empieza Gratis Ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl h-14 px-8 border-2 font-bold transition-all hover:bg-accent">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted" />
                ))}
              </div>
              <span>+2,000 personas ya controlan sus finanzas</span>
            </div>
          </div>

          {/* MOCKUP DEL DASHBOARD USANDO VARIABLES SHADCN */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full" />
            <div className="rounded-3xl border border-border bg-card text-card-foreground shadow-2xl p-4 md:p-8 animate-in fade-in zoom-in duration-700">
               <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-muted-foreground">Balance Total</p>
                      <p className="text-3xl font-black">$2,450,000.00</p>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/10">
                      +12.5%
                    </Badge>
                  </div>
                  <div className="h-48 w-full bg-muted/30 rounded-2xl border-2 border-dashed border-border flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                        <PieChart className="text-muted-foreground group-hover:text-primary transition-colors" size={32} />
                        <span className="text-xs font-bold uppercase text-muted-foreground">Gráficos de rendimiento</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-border rounded-2xl bg-accent/50">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Ahorro S&P 500</p>
                      <p className="font-bold text-primary">$700.00 / mes</p>
                    </div>
                    <div className="p-4 border border-border rounded-2xl bg-accent/50">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest text-right">Gastos Fijos</p>
                      <p className="font-bold text-destructive text-right text-sm">45% del total</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Finanzas simples para gente ocupada.
          </h2>
          <p className="text-muted-foreground text-lg">
            Sabemos que no tienes tiempo para anotar cada café. Por eso creamos un sistema que trabaja para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Seguimiento Inteligente",
              desc: "Sincroniza tus cuentas o sube tus transacciones. Categorización automática con IA.",
              icon: <PieChart className="h-6 w-6" />,
            },
            {
              title: "Metas de Inversión",
              desc: "Visualiza tu camino hacia la jubilación. Configura tu meta de $700 mensuales y mira cómo crece.",
              icon: <TrendingUp className="h-6 w-6" />,
            },
            {
              title: "Seguridad Bancaria",
              desc: "Tus datos están encriptados con los más altos estándares. Tu privacidad es prioridad.",
              icon: <ShieldCheck className="h-6 w-6" />,
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl border border-border bg-card hover:border-primary transition-all duration-300 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DARK SECTION / TRUST --- */}
      <section className="py-10  text-secondary-foreground overflow-hidden">
        <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Construye el futuro que <br /> <span className="text-primary">te mereces.</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Reportes mensuales automáticos",
                "Alertas de suscripciones olvidadas",
                "Predicción de gastos futuros",
                "Multimoneda (ARS, CLP, USD)"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="text-primary h-5 w-5" /> {text}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:opacity-90 font-bold rounded-xl h-14 px-10">
                Quiero mi libertad financiera
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-64 h-[500px] border-[8px] border-muted rounded-[3rem] bg-background shadow-2xl overflow-hidden relative">
               <div className="absolute top-0 inset-x-0 h-6 bg-muted rounded-b-xl mx-auto w-24" />
               <div className="p-6 pt-12 text-foreground space-y-6">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Resumen Semanal</p>
                 <div className="space-y-3">
                   <div className="h-12 w-full bg-muted/50 rounded-xl animate-pulse" />
                   <div className="h-12 w-full bg-muted/50 rounded-xl animate-pulse" />
                   <div className="h-32 w-full bg-primary rounded-2xl shadow-lg shadow-primary/20" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-20 ">
        <div className="container px-4 mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black">
            ¿Listo para tomar el control?
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Únete a miles de usuarios que han transformado su relación con el dinero en menos de un mes.
          </p>
          <Button size="lg" className="rounded-xl h-16 px-12 font-black text-xl shadow-xl shadow-primary/20">
            Regístrate Gratis
          </Button>
          <p className="text-sm text-muted-foreground font-medium italic">
            Sin tarjetas de crédito. Sin compromisos.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}