import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button" // Importamos el átomo oficial

interface NavItemProps {
  item: { id: string; label: string; icon: string };
  isActive: boolean;
  onClick: () => void;
}

export const NavItem = ({ item, isActive, onClick }: NavItemProps) => (
  <Button
    variant={isActive ? "default" : "ghost"} // Usamos la variante que definimos antes
    className={cn(
      "w-full justify-start gap-3 px-4 py-6 rounded-2xl transition-all",
      !isActive && "text-muted-foreground hover:text-foreground"
    )}
    onClick={onClick}
  >
    <span className="text-xl">{item.icon}</span>
    <span className="font-semibold">{item.label}</span>
  </Button>
)