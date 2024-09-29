import { Component, HostBinding } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../input/input.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BtnGuardarCancelarComponent } from '../btn-guardar-cancelar/btn-guardar-cancelar.component';



@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent, CommonModule, InputComponent, FormsModule, BtnGuardarCancelarComponent, ReactiveFormsModule],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  @HostBinding('style.width') width: string = '100%';

  perfilForm: FormGroup;
  calculadorForm: FormGroup;

  private chPermitidosNomb = '[a-zA-Z]*$'
  private chPermitidosUser = '^[a-zA-Z0-9]*$'

  minLectura: number = 0;
  mostrarCalculador = new MostrarCalculador();

  mostrarNuevosInputs: boolean = false;

  boton = new BtnGuardarCancelarComponent()



  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      'nombre': ['', [Validators.required, Validators.pattern(this.chPermitidosNomb)]],
      'apellido': ['', [Validators.required, Validators.pattern(this.chPermitidosNomb)]],
      'username': ['', [Validators.required, Validators.pattern(this.chPermitidosUser)]],
      'fecha de nacimiento': ['', [Validators.required, DateValidator.LessThanToday]],
      'email': ['', [Validators.required, Validators.email]]
    })

    this.calculadorForm = this.fb.group({
      'numero min': [0, [Validators.min(0)]],
      'numero max': [0, [Validators.min(0)]]
    })

    this.calculadorForm.setValidators(MinMaxValidator.LessThanMin())
  }



  mostrar(event: any) {
    this.mostrarNuevosInputs = event.target.checked; // Actualiza según si el checkbox está marcado o no
  }

  errorMessage(form: string) {
    var error = this.fb.control(form).errors
    console.log(error)
  }

  ngOnInit() {
    Object.keys(this.perfilForm.controls).forEach(nombreForm => {
      var form = this.perfilForm.get(nombreForm)
      form?.statusChanges.subscribe(valor => {
        console.log(valor)
      })
    })

    Object.keys(this.calculadorForm.controls).forEach(nombreForm => {
      var form = this.calculadorForm.get(nombreForm)
      form?.statusChanges.subscribe(valor => {
        console.log(valor)
      })
    })
  }


}

class MostrarCalculador {
  mostrar: boolean = false

  show() {
    this.mostrar = !this.mostrar
  }
}

export class DateValidator {

  static LessThanToday(control: FormControl): ValidationErrors | null {
    let hoy: Date = new Date();

    if (new Date(control.value) > hoy)
      return { "LessThanToday": true };

    return null;
  }
}

export class MinMaxValidator {

  static LessThanMin(): any {
    return (group: FormGroup) => {
      const minControl = group.get('numero min')
      const maxControl = group.get('numero max')

      let min: number = minControl?.value
      let max: number = maxControl?.value

      /* console.log("El minimo es:", min)
      console.log("El maximo es:", max) */

      if (min > max && max < min)
        {maxControl?.setErrors({ "LessThanMin": true });}
      else
      {minControl?.setErrors(null);}
    }
  }
}



