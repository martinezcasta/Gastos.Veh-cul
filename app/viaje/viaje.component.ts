import { Component } from '@angular/core';
import{Viaje} from '../models/viaje.model';
import{ViajeService} from '../viaje.service';
import{RouterModule} from '@angular/router';
import {CalculoComponent } from '../calculo/calculo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viaje',
  standalone: true,
  imports: [RouterModule,CalculoComponent,FormsModule],
  templateUrl: './viaje.component.html',
  styleUrl: './viaje.component.scss',
})
export class ViajeComponent {
  viaje: Viaje={
    distancia:0,
    KmPorGalon:0,
    costoGalon:0,
    costoPeaje:0,

  };

  resultado: any
  viajeservice: any;

  constructor(private viajeService: ViajeService){}

  calcularViaje(formvalue: Viaje){
    this.resultado = this.viajeService.calcularCostoViaje(formvalue);
    console.log(this.resultado)
 }

}
