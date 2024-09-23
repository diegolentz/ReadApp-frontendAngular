import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';
import { InputComponent } from '../input/input.component';

import { Username,Password } from '../input/input.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EncabezadoComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = Username
  password = Password
  constructor(private router:Router, private route:ActivatedRoute){}
  
  goTo(option:string){
    this.router.navigate([option])
  }
}
