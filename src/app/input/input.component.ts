import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {

  

  constructor(private formBuilder:FormBuilder){
    const formulario = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', []],
      email: ['', [Validators.required, Validators.email]],
      texto: ['', []],
      fecha: ['', [Validators.required, Validador.dateValidator]],
      numeros: [0, []]
    })
  }
}


class Validador{

  MIN_CH_USUARIO:number = 5;

  static dateValidator(control:FormControl): ValidationErrors | null{
    let hoy : Date = new Date();
       if (new Date(control.value) < hoy)
           return { "dateValidator": true };
       return null;
   }

   static usernameValidator(control:FormControl): ValidationErrors | null{
    const 
   }
  }

