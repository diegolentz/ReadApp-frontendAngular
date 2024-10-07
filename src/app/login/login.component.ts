import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';
import { InputComponent } from '../input/input.component';
import { ServiceUser } from '../../service/service-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Form, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EncabezadoComponent, InputComponent, FormsModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private serviceUser: ServiceUser) { }
  
  formStrategy:FormStrategy = new LoginForm()
  form!: FormGroup
  formFields!: Array<InputForm>
  
  ngOnInit(): void {
    this.form = this.formStrategy.createForm()
    this.formFields = this.formStrategy.getFormFields()
  }

  id!: number;
  loginRequest: LoginRequest = new LoginRequest("", "")


  goTo(option: string) {
    this.router.navigate([option])
  }

  async tryLogin() {
    try {
      console.log(this.loginRequest.passwordEmpty())
      const response = await this.serviceUser.login(this.loginRequest)
      this.id = response.userID
      localStorage.setItem('id', this.id.toString());
      console.log(`Valor de local storage ${localStorage.getItem('id')}`)
      this.goTo('home')
    }
    catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        //Solo me interesa HttpErrorResponde
        console.log(error.error["timestamp"])
        console.log(error.error["status"])
        console.log(error.error["error"])
        console.log(error.error["message"])
        console.log(error.error["path"])
      }
    }
  }
  showFormLogin() {
    this.formStrategy = new LoginForm()
    this.ngOnInit()
  }

  showFormCreateAccount() {
    this.formStrategy = new NewAccountForm()
    this.ngOnInit()
  }

  showPasswordRecovery() {
    this.formStrategy = new PasswordRecoveryForm()
    this.ngOnInit()
  }
}

export class LoginRequest {
  constructor(
    public username: string,
    public password: string
  ) { }

  usernameEmpty() {
    return this.username.length == 0
  }

  passwordEmpty() {
    return this.password.length == 0
  }

  checkEmptyFields() {
    if (this.usernameEmpty() || this.passwordEmpty()) {
      alert("Debe completar todos los campos")
    }
  }
}

interface FormStrategy {
  createForm(): FormGroup
  getFormFields(): any
}

class LoginForm implements FormStrategy {
  createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  getFormFields(){
    return [
      { label: 'Username', type: 'username', name: 'username' },
      { label: 'Password', type: 'password', name: 'password' },
    ];
  }
}

class NewAccountForm implements FormStrategy {


  createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
    });
  }
  getFormFields(){
    return [
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Username', type: 'username', name: 'username' },
      { label: 'Password', type: 'password', name: 'password' },
      { label: 'Name', type: 'name', name: 'name' },
    ];
  }
}

class PasswordRecoveryForm implements FormStrategy {

  createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      username: new FormControl('')
    });
  }
  getFormFields():Array<InputForm>{
    return [
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Username', type: 'username', name: 'username' },
    ];
  }

}

export class FormStrategyFactory {

  createFormStrategy(formType: FormType): FormStrategy {

    switch (formType) {
      case FormType.LOGIN:
        return new LoginForm();
      case FormType.PASSWORD_RECOVERY:
        return new NewAccountForm();
      case FormType.CREATE_ACCOUNT:
        return new PasswordRecoveryForm();
      default:
        throw new Error(`Unknown form type: ${formType}`);
    }
  }
}

enum FormType {
  LOGIN,
  PASSWORD_RECOVERY,
  CREATE_ACCOUNT
}

type InputForm = {
  label:string,
  type:string,
  name:string
}