import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';
import { InputComponent } from '../input/input.component';
import { ServiceUser } from '../../service/service-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EncabezadoComponent, InputComponent, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  formRestrictions = FORM_RECTRICTIONS
  constructor(
    private router: Router,
    private serviceUser: ServiceUser,
    private fb:FormBuilder
  ){
    this.loginForm = this.fb.group({
      'username': ['', [Validators.required, Validators.maxLength(this.formRestrictions.USERNAME_MAX)]],
      'password': ['', [Validators.required, , Validators.maxLength(this.formRestrictions.PASSWORD_MAX)]],
    })
    this.newAccountForm = this.fb.group({
      'email': ['', [Validators.required]],
      'username': ['', [Validators.required, Validators.maxLength(this.formRestrictions.USERNAME_MAX)]],
      'password': ['', [Validators.required, Validators.maxLength(this.formRestrictions.PASSWORD_MAX)]],
      'name': ['', [Validators.required]]
    })
  }

  formType:FormType = FormType.LOG_IN
  loginForm!:FormGroup
  newAccountForm!:FormGroup

  id!: number;

  goTo(option: string) {
    this.router.navigate([option])
  }

  async tryLogin() {
    const request = this.buildLoginRequest()
    try {
      const response = await this.serviceUser.login(request)
      this.id = response.userID
      localStorage.setItem('id', this.id.toString());
      this.goTo('home')
    }
    catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        console.log(error.error["status"])
        console.log(error.error["error"])
        alert(error.error["message"])
      }
    }
  }

  async tryCreateAccount() {
    const request = this.buildNewAccountRequest()
    try {
      const response = await this.serviceUser.newAccount(request)
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
  buildLoginRequest():LoginRequest{
    return {
      username:this.getFormValue("username", this.loginForm),
      password:this.getFormValue("password", this.loginForm)
    }
  }
  buildNewAccountRequest():NewAccountRequest{
    return {
      email:this.getFormValue("email", this.newAccountForm),
      username:this.getFormValue("username", this.newAccountForm),
      password:this.getFormValue("password", this.newAccountForm),
      name:this.getFormValue("name", this.newAccountForm)
    }
  }
  buildPasswordRecovery():NewAccountRequest{
    return {
      email:this.getFormValue("email", this.newAccountForm),
      username:this.getFormValue("username", this.newAccountForm),
      password:this.getFormValue("password", this.newAccountForm),
      name:this.getFormValue("name", this.newAccountForm)
    }
  }
  getFormValue(label:string, form:FormGroup){
    return form.get(label)?.value
  }

  warning(label:string){
    return this.formInvalid(label) && this.formTouchedDirty(label)
  }
  formInvalid(label:string):boolean{
    return this.loginForm.controls[label].invalid
  }
  formTouchedDirty(label:string):boolean{
    return (this.loginForm.controls[label].touched || this.loginForm.controls[label].dirty)
  }
}

export enum FormType{
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


enum FORM_RECTRICTIONS{
  USERNAME_MAX = 8,
  PASSWORD_MAX = 16
}
