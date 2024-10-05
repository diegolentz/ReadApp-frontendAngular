import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';
import { InputComponent } from '../input/input.component';
import { ServiceUser } from '../../service/service-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EncabezadoComponent, InputComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id!:number;
  // id:number = 0;
  loginRequest:LoginRequest = {
    username: "",
    password: ""
  }
  ngOnInit() {
    // this.saveIdToLocalStorage(); // cuando inicio login, mockeo un ud
  }

  constructor(private router: Router, private serviceUser:ServiceUser) { }

  goTo(option: string) {
    this.router.navigate([option])
    // this.saveIdToLocalStorage();
  }

  // id mockeado
  // saveIdToLocalStorage() {
  //   localStorage.setItem('id', this.id.toString());
  // }

  async tryLogin(){
    try{
      const response = await this.serviceUser.login(this.loginRequest)
      this.id = response.userID
      localStorage.setItem('id', this.id.toString());
      console.log(`Valor de local storage ${localStorage.getItem('id')}`)
      this.goTo('home')
    }
    catch(error:any){
      if(error instanceof HttpErrorResponse){
        //Solo me interesa HttpErrorResponde
        console.log(error.error["timestamp"])
        console.log(error.error["status"])
        console.log(error.error["error"])
        console.log(error.error["message"])
        console.log(error.error["path"])
      }
    }
  }
}

export type LoginRequest = {
  username:string
  password:string
}