import { Button } from "@/components/ui/button"

interface ViewHeaderProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const ViewHeader = ({ title, subtitle, buttonText, onButtonClick }: ViewHeaderProps) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        {/* Usamos text-foreground para que en Dark Mode sea blanco automáticamente */}
        <h2 className="text-3xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          {subtitle}
        </p>
      </div>

      {buttonText && (
        <Button 
          onClick={onButtonClick}
          className="rounded-full px-6 shadow-md hover:scale-105 transition-transform"
        >
          {/* Aquí puedes usar un icono si quieres, como un Plus de Lucide */}
          <span className="mr-2 text-lg">+</span>
          {buttonText}
        </Button>
      )}
    </header>
  )
}