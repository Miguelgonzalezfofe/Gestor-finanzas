import { InvestmentDTO } from "./investments.dto";

// src/lib/domain/investments/investments.mapper.ts
export class InvestmentsMapper {
  static toDomain(raw: any): InvestmentDTO {
    const gananciaAbsoluta = raw.current_value - raw.amount_invested;
    const roi = (gananciaAbsoluta / raw.amount_invested) * 100;

    return {
      id: raw.id,
      activo: raw.asset_name,
      simbolo: raw.symbol,
      tipo: raw.asset_type,
      montoInvertido: raw.amount_invested,
      valorActual: raw.current_value,
      gananciaAbsoluta: gananciaAbsoluta,
      roi: parseFloat(roi.toFixed(2)),
      esPositivo: gananciaAbsoluta >= 0,
      icono: raw.icon || "📈"
    };
  }

  static toDomainList(rows: any[]): InvestmentDTO[] {
    return rows.map(this.toDomain);
  }
}