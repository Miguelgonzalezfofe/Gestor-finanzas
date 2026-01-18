// src/lib/domain/investments/investments.dto.ts
export interface InvestmentDTO {
  id: string;
  activo: string;
  simbolo: string;
  tipo: string;
  montoInvertido: number;
  valorActual: number;
  gananciaAbsoluta: number;
  roi: number;
  esPositivo: boolean;
  icono: string;
}

