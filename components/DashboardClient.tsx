"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {
  gastos: any[];
  ingresos: any[];
  deudas: any[];
  inversiones: any[];
}

export default function DashboardClient({ gastos, ingresos, deudas, inversiones }: Props) {
  const totalGastos = gastos.reduce((acc, g) => acc + g.monto, 0);
  const totalIngresos = ingresos.reduce((acc, g) => acc + g.monto, 0);
  const totalDeudas = deudas.reduce((acc, g) => acc + g.monto, 0);
  const totalInversiones = inversiones.reduce((acc, g) => acc + g.monto, 0);

  const balance = totalIngresos - totalGastos - totalDeudas;

  // Distribución total para PieChart
  const distribution = [
    { name: "Gastos", value: totalGastos },
    { name: "Ingresos", value: totalIngresos },
    { name: "Deudas", value: totalDeudas },
    { name: "Inversiones", value: totalInversiones },
  ];

  const colors = ["#ef4444", "#22c55e", "#f97316", "#3b82f6"];

  // Ejemplo simple de evolución mensual (deberías agrupar por mes)
  const monthlyFlow = [
    { mes: "Ene", ingresos: totalIngresos, gastos: totalGastos },
    { mes: "Feb", ingresos: totalIngresos * 0.9, gastos: totalGastos * 1.1 },
    { mes: "Mar", ingresos: totalIngresos * 1.2, gastos: totalGastos * 0.9 },
  ];

  return (
    <div className="space-y-10 p-6">
      {/* Balance general */}
      <Card className="p-6 border shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl">Balance general</CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`text-4xl font-bold ${balance >= 0 ? "text-green-600" : "text-red-600"}`}>
            ${balance.toLocaleString()}
          </p>
        </CardContent>
      </Card>

      {/* Cards de totales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ResumenCard titulo="Ingresos" valor={totalIngresos} color="text-green-600" />
        <ResumenCard titulo="Gastos" valor={totalGastos} color="text-red-600" />
        <ResumenCard titulo="Deudas" valor={totalDeudas} color="text-orange-600" />
        <ResumenCard titulo="Inversiones" valor={totalInversiones} color="text-blue-600" />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Line chart */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Evolución mensual</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyFlow}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ingresos" stroke="#22c55e" strokeWidth={3} />
                <Line type="monotone" dataKey="gastos" stroke="#ef4444" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie chart */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Distribución total</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={distribution} dataKey="value" nameKey="name" outerRadius={100}>
                  {distribution.map((_, i) => (
                    <Cell key={i} fill={colors[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* Tabs con detalle por categoría */}
      <Tabs defaultValue="gastos">
        <TabsList>
          <TabsTrigger value="gastos">Gastos</TabsTrigger>
          <TabsTrigger value="ingresos">Ingresos</TabsTrigger>
          <TabsTrigger value="deudas">Deudas</TabsTrigger>
          <TabsTrigger value="inversiones">Inversiones</TabsTrigger>
        </TabsList>

        <TabsContent value="gastos">
          <ListaDetalle datos={gastos} titulo="Gastos" />
        </TabsContent>

        <TabsContent value="ingresos">
          <ListaDetalle datos={ingresos} titulo="Ingresos" />
        </TabsContent>

        <TabsContent value="deudas">
          <ListaDetalle datos={deudas} titulo="Deudas" />
        </TabsContent>

        <TabsContent value="inversiones">
          <ListaDetalle datos={inversiones} titulo="Inversiones" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ResumenCard({ titulo, valor, color }: any) {
  return (
    <Card className="p-6 shadow-sm">
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-3xl font-semibold ${color}`}>${valor.toLocaleString()}</p>
      </CardContent>
    </Card>
  );
}

function ListaDetalle({ datos, titulo }: any) {
  return (
    <Card className="p-6 mt-6">
      <CardHeader>
        <CardTitle>Últimos {titulo}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {datos.map((d: any) => (
            <li key={d.id} className="border-b pb-2">
              <span className="font-semibold">${d.monto}</span> — {d.nombre}  
              <br />
              <span className="text-sm text-gray-500">{d.fecha}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
