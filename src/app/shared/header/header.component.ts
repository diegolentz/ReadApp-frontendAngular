import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
