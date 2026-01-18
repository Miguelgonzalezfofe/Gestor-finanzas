import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

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

        </div>

        <Footer />
      </div>
    </main>
  );
}
