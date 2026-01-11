import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Dashboard from "@/components/Dashboard";

export default function ProtectedPage() {
  noStore();

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Dashboard />
    </Suspense>
  );
}
