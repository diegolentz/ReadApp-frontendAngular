import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'] 
})
export class InputComponent implements OnInit {
  @Input() objeto!: any; 
  @Input() label: string = "";
  @Input() id: string = '';
  @Input() required: boolean = false;
  formulario!: FormControl; 

  ngOnInit() {
    this.formulario = this.objeto.iniciar();
    
    if (this.formulario.invalid) {
      this.formulario.markAsTouched();
    }

    //contenido del input
    this.formulario.valueChanges.subscribe(value => {
      console.log('Valor ingresado en el input:', value);
  
    });
  }

//  parte turbina
getErrorMessage(): string {
  if (this.formulario.hasError('required')) {
    return 'Este campo es obligatorio.';
  }

  if (this.formulario.hasError('pattern')) {
    const inputType = this.objeto.inputType();
    if (inputType === "text" && this.objeto.estilos() === "nombreApellido") {
      return 'Este campo solo puede contener letras.'; // Mensaje específico para nombre y apellido
    }
    
    if (inputType === "text" || inputType === "password") {
      return 'Este campo solo puede contener letras y números.';
    }
    
    if (inputType === "mail") {
      return 'El Mail debe ser por ej: usuario@dominio.com.';
    }
    
    if (inputType === "number") {
      return 'Por favor, introduce un número positivo.';
    }
  }

  if (this.formulario.hasError('minlength')) {
    const minLength = this.formulario.getError('minlength').requiredLength;
    return `Este campo debe contener al menos ${minLength} caracteres.`;
  }

  if (this.formulario.hasError('maxlength')) {
    const maxLength = this.formulario.getError('maxlength').requiredLength;
    return `Este campo debe contener como máximo ${maxLength} caracteres.`;
  }

  return ''; 
}

}
  


interface FormBase {
  iniciar(): FormControl;
  inputType(): string;
  estilos() : string;
}
export const Username: FormBase = {
  
  iniciar: () => new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(15),Validators.pattern('^[a-zA-Z0-9]+$')]),
  inputType: () => "text",
  estilos: () => "usuario",
};
export const NombreApellido: FormBase = {
  
  iniciar: () => new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(15),Validators.pattern('^[a-zA-Z]+$')]),
  inputType: () => "text",
  estilos: () => "nombreApellido"
};
export const Password: FormBase = {
  iniciar: () => new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(10),Validators.pattern('^[a-zA-Z0-9]+$')]),
  inputType: () => "password",
  estilos:() => "password"
};
export const Email: FormBase = {
  iniciar: () => new FormControl('',[Validators.minLength(3),Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$')]),
  inputType: () => "mail",
  estilos:() => "email"
};
export const Texto: FormBase = {
  iniciar: () => new FormControl('',[Validators.minLength(30),Validators.maxLength(500)]),
  inputType: () => "textarea",
  estilos:() => "texto"
};
// pipes?
export const Fecha: FormBase = {
  iniciar: () => new FormControl('',[Validators.minLength(3),Validators.maxLength(30)]),
  inputType: () => "date",
  estilos:() => "fecha"
};
// 
export const Numero: FormBase = {
  iniciar: () => new FormControl('',[Validators.minLength(1),Validators.maxLength(15),Validators.pattern('^[1-9][0-9]*$')]),
  inputType: () => "number",
  estilos:() => "numero"
};
// letras y numeros
export const Nav: FormBase = {
  iniciar: () => new FormControl('',[Validators.minLength(3),Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9]+$')]),
  inputType: () => "text",
  estilos:() => "nav"
};