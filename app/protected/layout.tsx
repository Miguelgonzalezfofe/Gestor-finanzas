import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { FabActions } from "@/components/FabActions";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <Toaster />
        <Navbar />
        <div className="max-w-5xl p-5">
          {children}
        <FabActions />

        </div>

        <Footer />
      </div>
    </main>
  );
}
