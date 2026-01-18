import { Card, CardHeader, CardTitle, CardContent } from './card'

function BalanceCard({balance}:{balance:number}) {
  return (
    <Card className="p-6 border shadow-sm">
        <CardHeader>
          <CardTitle className={` text-3xl`}>Balance general</CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`text-4xl font-bold ${balance >= 0 ? "text-green-600" : "text-red-600"}`}>
            ${balance.toLocaleString()}
          </p>
        </CardContent>
      </Card>
  )
}

export default BalanceCard