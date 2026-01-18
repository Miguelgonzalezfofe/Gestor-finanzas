export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-12 w-12 bg-primary/20 rounded-full" />
        <p className="text-sm font-medium text-muted-foreground">Cargando tu billetera...</p>
      </div>
    </div>
  )
}