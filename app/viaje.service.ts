import { Injectable } from '@angular/core';
import{Viaje} from './models/viaje.model';
import{CalculoViaje} from './models/calculo-viaje.models';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor() { }

  calcularCostoViaje(viaje:Viaje): CalculoViaje{
    const costoTotal = this.calcularCostoTotal(viaje);
    const duracion = this.calcularDuracion(viaje);
    const advertenciaDescanso = this.verificarDescanso(duracion);
    return {costoTotal, duracion,advertenciaDescanso};
  } 

  private calcularCostoTotal(viaje:Viaje): number{
    const consumo =Number(viaje.distancia)/Number(viaje.KmPorGalon);
    const costoCombustible = consumo * Number(viaje.costoGalon);
    const costoPeaje = Number(viaje.costoPeaje);
    return costoCombustible + costoPeaje;
  }

  private calcularDuracion(viaje: Viaje): number {
   return Number(viaje.distancia)/60;
  }

 private verificarDescanso(duracion: number): boolean {
    return duracion > 12;
  }
  
}
