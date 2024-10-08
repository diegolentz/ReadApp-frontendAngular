import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';
import { InputComponent } from '../input/input.component';
import { ServiceUser } from '../../service/service-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EncabezadoComponent, InputComponent, FormsModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router: Router, private serviceUser: ServiceUser) { }

  formType:FormType = FormType.LOG_IN

  loginRequest :LoginRequest = {
    username: '',
    password: ''
  };

  newAccountRequest :NewAccountRequest = {
    username: '',
    password: '',
    email: '',
    name: ''
  };

  passwordRecoveryRequest :PasswordRecoveryRequest = {
    email: '',
    username: ''
  };

  id!: number;

  goTo(option: string) {
    this.router.navigate([option])
  }

  async tryLogin() {
    try {
      const response = await this.serviceUser.login(this.loginRequest)
      this.id = response.userID
      localStorage.setItem('id', this.id.toString());
      console.log(`Valor de local storage ${localStorage.getItem('id')}`)
      this.goTo('home')
    }
    catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        //Solo me interesa HttpErrorResponde
        console.log(error.error["status"])
        console.log(error.error["error"])
        console.log(error.error["message"])
        alert(error.error["message"])
      }
    }
  }

  async tryCreateAccount() {
    try {
      const response = await this.serviceUser.newAccount(this.newAccountRequest)
      alert(response.message)
      this.changeToLogin()
    }
    catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        console.log(error.error["status"])
        console.log(error.error["error"])
        alert(error.error["message"])
      }
    }
  }

  async tryPasswordRecovery() {
    try {
      console.log("PASSWORD")
      // const response = await this.serviceUser.login(this.loginRequest)

    }
    catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        console.log(error.error["status"])
        console.log(error.error["error"])
        console.log(error.error["message"])
      }
    }
  }
  changeToLogin(){
    this.formType = FormType.LOG_IN
  }
  changeToCreateAccount(){
    this.formType = FormType.NEW_ACCOUNT
  }
  changeToPasswordRecovery(){
    this.formType = FormType.PASSWORD_RECOVERY
  }
  showFormLogin():boolean {
    return this.formType == FormType.LOG_IN
  }
  showFormCreateAccount() {
    return this.formType == FormType.NEW_ACCOUNT
  }
  showPasswordRecovery() {
    return this.formType == FormType.PASSWORD_RECOVERY
  }

}

enum FormType{
  LOG_IN,
  NEW_ACCOUNT,
  PASSWORD_RECOVERY
}

export type LoginRequest = {
  username:string
  password:string
}

export type NewAccountRequest = {
  username:string
  password:string
  name:string
  email:string
}

export type PasswordRecoveryRequest = {
  email:string,
  username:string
}


