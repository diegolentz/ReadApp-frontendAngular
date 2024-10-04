import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EncabezadoComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id = 1;
  loginRequest:LoginRequest = {
    username: "",
    password: ""
  }
  ngOnInit() {
    // this.saveIdToLocalStorage(); // cuando inicio login, mockeo un ud
  }

  constructor(private router: Router) { }

  goTo(option: string) {
    this.router.navigate([option])
    this.saveIdToLocalStorage();
  }

  // id mockeado
  saveIdToLocalStorage() {
    localStorage.setItem('id', this.id.toString());
  }

  tryLogin(){
    console.log(this.loginRequest)
  }
}

type LoginRequest = {
  username:string,
  password:string
}