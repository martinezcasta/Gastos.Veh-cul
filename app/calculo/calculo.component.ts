import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './calculo.component.html',
  styleUrl: './calculo.component.scss'
})
export class CalculoComponent {
  @Input() resultado: any;
}


