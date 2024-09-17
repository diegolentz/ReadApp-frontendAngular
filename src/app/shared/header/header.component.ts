import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { ShorcutMyProfileComponent } from '../shorcut-my-profile/shorcut-my-profile.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [EncabezadoComponent , ShorcutMyProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}


