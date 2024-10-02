import { Component, HostBinding } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../input/input.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { BtnGuardarCancelarComponent } from '../btn-guardar-cancelar/btn-guardar-cancelar.component';
import { ServiceUserService } from '../../../service/service-user.service';



@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent, CommonModule, InputComponent, FormsModule, BtnGuardarCancelarComponent, ReactiveFormsModule],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  @HostBinding('style.width') width: string = '100%';

  /* Forms */
  perfilForm: FormGroup;
  calculadorForm: FormGroup;
  private chPermitidosNomb = '[a-zA-Z]*$'
  private chPermitidosUser = '^[a-zA-Z0-9]*$'

  /* Hacer aparecer botones de min y max cuando se presiona Calculador */
  mostrarCalculador = new MostrarCalculador();
  mostrarNuevosInputs: boolean = false;

  boton = new BtnGuardarCancelarComponent()

  constructor(private fb: FormBuilder, private UserService:ServiceUserService) {
    this.perfilForm = this.fb.group({
      'nombre': ['', [Validators.required, Validators.pattern(this.chPermitidosNomb)]],
      'apellido': ['', [Validators.required, Validators.pattern(this.chPermitidosNomb)]],
      'username': ['', [Validators.required, Validators.pattern(this.chPermitidosUser)]],
      'fecha de nacimiento': ['', [Validators.required, DateValidator.LessThanToday]],
      'email': ['', [Validators.required, Validators.email]]
    })

    this.calculadorForm = this.fb.group({
      'numero min': [0],
      'numero max': [0]
    })

    this.calculadorForm.setValidators(MinMaxValidator.LessThanMin())
  }

  ngOninit(){
    console.log(this.UserService.getUser(1))
  }


  errorMessage(form: FormGroup, campo: string, validator: string) {
    const campoForm = form.get(campo)
    const error = campoForm?.errors
    if (campoForm?.value == '') return 'este campo es obligatorio'
    if (validator == 'pattern' && error) return 'el campo contiene carácteres no permitidos'
    if (validator == 'email' && error) return 'dominio del correo incorrecto'
    if (validator == 'date validator' && error) return 'ingrese una fecha menor a hoy'
    if (validator == 'minmax' && error) return 'el valor minimo no puede superar a l máximo o ser negativo'
    return undefined
  }

  mostrar(event: any) {
    this.mostrarNuevosInputs = event.target.checked;
    this.resetCalculador() // Actualiza según si el checkbox está marcado o no
  }
  resetCalculador() {
    this.calculadorForm.reset()
  }


async ngOnInit(){
    let usu = await this.UserService.getUser(1)
    this.perfilForm.patchValue({
      'nombre' : usu.name,
      'apellido' : usu.lastName,
      'username' : usu.alias,
      'fecha de nacimiento' : usu.birthDate,
      'email' : usu.email
    })

    let ususs = await this.UserService.getUsers()
    console.log(ususs)
    /* this.UserService.getUser(1)
    .then((usuario) => {
      this.perfilForm.patchValue({
        'nombre' : usuario.alias
      })
      console.log(usuario.name)
    })
     */    
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

      if (min > max || min < 0) {
        maxControl?.setErrors({ "LessThanMin": true });
      }
      else {
        maxControl?.setErrors(null);
      }
    }
  }
}



