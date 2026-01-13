"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CreditDTO } from "@/lib/domain/credits/credits.dto";
import { ExpenseDTO } from "@/lib/domain/expenses/expenses.dto";
import { IncomeDTO } from "@/lib/domain/Incomes/Incomes.dto";
import { InvestmentDTO } from "@/lib/domain/investments/investments.dto";
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {
  expenses: ExpenseDTO[];
  incomes: IncomeDTO[];
  credits: CreditDTO[];
  investments: InvestmentDTO[];
}

export default function DashboardClient({ expenses, incomes, credits, investments }: Props) {
  const totalExpenses = expenses.reduce((acc, g) => acc + g.monto, 0);
  const totalIncomes = incomes.reduce((acc, g) => acc + g.monto, 0);
  const totalCredits = credits.reduce((acc, g) => acc + g.monto, 0);
  const totalInvestments = investments.reduce((acc, g) => acc + g.monto, 0);

  const balance = totalIncomes - totalExpenses - totalCredits;

  // Distribución total para PieChart
  const distribution = [
    { name: "Gastos", value: totalExpenses },
    { name: "Ingresos", value: totalIncomes },
    { name: "Deudas", value: totalCredits },
    { name: "Inversiones", value: totalInvestments },
  ];

  const colors = ["#ef4444", "#22c55e", "#f97316", "#3b82f6"];

  // Ejemplo simple de evolución mensual (deberías agrupar por mes)
  const monthlyFlow = [
    { mes: "Ene", incomes: totalIncomes, expenses: totalExpenses },
    { mes: "Feb", incomes: totalIncomes * 0.9, expenses: totalExpenses * 1.1 },
    { mes: "Mar", incomes: totalIncomes * 1.2, expenses: totalExpenses * 0.9 },
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
        <ResumenCard titulo="Ingresos" valor={totalIncomes} color="text-green-600" />
        <ResumenCard titulo="Gastos" valor={totalExpenses} color="text-red-600" />
        <ResumenCard titulo="Deudas" valor={totalCredits} color="text-orange-600" />
        <ResumenCard titulo="Inversiones" valor={totalInvestments} color="text-blue-600" />
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
                <Line type="monotone" dataKey="incomes" stroke="#22c55e" strokeWidth={3} />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={3} />
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
      <Tabs defaultValue="expenses">
        <TabsList>
          <TabsTrigger value="expenses">Gastos</TabsTrigger>
          <TabsTrigger value="incomes">Ingresos</TabsTrigger>
          <TabsTrigger value="credits">Deudas</TabsTrigger>
          <TabsTrigger value="investments">Inversiones</TabsTrigger>
        </TabsList>

        <TabsContent value="expenses">
          <ListaDetalle datos={expenses} titulo="Gastos" />
        </TabsContent>

        <TabsContent value="incomes">
          <ListaDetalle datos={incomes} titulo="Ingresos" />
        </TabsContent>

        <TabsContent value="credits">
          <ListaDetalle datos={credits} titulo="Deudas" />
        </TabsContent>

        <TabsContent value="investments">
          <ListaDetalle datos={investments} titulo="Inversiones" />
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
