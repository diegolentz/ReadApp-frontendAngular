import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router, private route:ActivatedRoute){}
  
  goTo(option:string){
    this.router.navigate([option])
  }
}
