"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FabActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3">

      {/* MENU */}
      {open && (
        <Card className="p-3 space-y-2 shadow-lg w-40">
          <Link href="/protected/gasto" className="block">
            <Button variant="ghost" className="w-full justify-start">
              Gasto
            </Button>
          </Link>

          <Link href="/protected/ingreso" className="block">
            <Button variant="ghost" className="w-full justify-start">
              Ingreso
            </Button>
          </Link>

          <Link href="/protected/inversion" className="block">
            <Button variant="ghost" className="w-full justify-start">
              Inversión
            </Button>
          </Link>

          <Link href="/protected/deuda" className="block">
            <Button variant="ghost" className="w-full justify-start">
              Deuda
            </Button>
          </Link>
        </Card>
      )}

      {/* FAB */}
      <Button
        onClick={() => setOpen(!open)}
        className="rounded-full p-5 shadow-lg text-3xl"
      >
        +
      </Button>
    </div>
  );
}
