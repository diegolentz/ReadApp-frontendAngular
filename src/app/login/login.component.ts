import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../shared/encabezado/encabezado.component';
import { InputComponent } from '../input/input.component';
import { ServiceUser } from '../../service/service-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
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
  formButtons!:Array<FormButton>

  ngOnInit(): void {
    this.form = this.formStrategy.createForm()
    this.formFields = this.formStrategy.getFormFields()
    this.formButtons = this.formStrategy.getFormButtons()
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
    console.log("create")
    // this.formStrategy = new NewAccountForm()
    // this.ngOnInit()
  }

  showPasswordRecovery() {
    console.log("delete")
    // this.formStrategy = new PasswordRecoveryForm()
    // this.ngOnInit()
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
  getFormFields(): Array<InputForm>
  getFormButtons(): Array<FormButton>
}

class LoginForm implements FormStrategy {
  createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  getFormFields():Array<InputForm>{
    return [
      { label: 'Username', type: 'username', name: 'username' },
      { label: 'Password', type: 'password', name: 'password' }
    ];
  }
  getFormButtons():Array<FormButton>{
    return [
      { label: 'Log in', action:LoginComponent.prototype.tryLogin},
      { label: 'Create account', action:LoginComponent.prototype.showFormCreateAccount},
      { label: 'Forgot password', action:LoginComponent.prototype.showPasswordRecovery}
    ]
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
  getFormFields():Array<InputForm>{
    return [
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Username', type: 'username', name: 'username' },
      { label: 'Password', type: 'password', name: 'password' },
      { label: 'Name', type: 'name', name: 'name' },
    ];
  }
  getFormButtons():Array<FormButton>{
    return [
      { label: 'Create account', action:LoginComponent.prototype.tryLogin},
      { label: 'Log in', action:LoginComponent.prototype.showFormLogin},
    ]
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
  getFormButtons():Array<FormButton>{
    return [
      { label: 'Recover password', action:LoginComponent.prototype.showFormLogin},
      { label: 'Go back to log in', action:LoginComponent.prototype.showFormLogin}
    ]
  }
}


type InputForm = {
  label:string,
  type:string,
  name:string
}

type FormButton = {
  label:string
  action:CommonMethod
}

type CommonMethod = () => void