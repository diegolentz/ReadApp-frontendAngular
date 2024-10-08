import { Component, HostBinding } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../input/input.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { BtnGuardarCancelarComponent } from '../btn-guardar-cancelar/btn-guardar-cancelar.component';
import { ServiceUser } from '../../../service/service-user.service';
import { FormErrorComponent } from "../../perfil-info/form-error/form-error.component";
import { UserInformacion } from '../../../domain/tmpUser';



@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent, CommonModule, InputComponent, FormsModule, BtnGuardarCancelarComponent, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  @HostBinding('style.width') width: string = '100%';

  /* Forms */
  perfilForm: FormGroup;
  calculadorForm: FormGroup;
  private chPermitidosNomb = '[a-zA-Z]*$';
  private chPermitidosUser = '^[a-zA-Z0-9]*$';
  esEditor: boolean = false;

  /* Hacer aparecer botones de min y max cuando se presiona Calculador */
  mostrarCalculador = new MostrarCalculador();
  mostrarNuevosInputs: boolean = false;

  boton = new BtnGuardarCancelarComponent()

  criteriosBusqueda = ['Precavido', 'Demandante', 'Cambiante', 'Leedor', 'Nativista', 'Poliglota', 'Experimentado']
  formasDeLectura = ['Promedio', 'Ansioso', 'Fanatico', 'Recurrente']
  userLectura: Array<string> = []
  userBusqueda: Array<string> = []

  constructor(private fb: FormBuilder, private UserService: ServiceUser) {
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

  puedeEditar() {
    this.esEditor = true
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

  estaEn(valor: string, lista: Array<string>) {
    return lista.includes(valor)
  }

  modificarBusqueda(valor: string, lista: Array<string>) {
    if (this.estaEn(valor, lista)) {
      const indice = lista.indexOf(valor)
      lista.splice(indice,1)
    } else {
      lista.push(valor)
    }
  }

  modificarLectura(valor: string, lista: Array<string>) {
    lista.pop()
    lista.push(valor)
  }

  async ngOnInit() {
    let userData = await this.UserService.getUserProfileByID(1)
    console.log(userData)
    this.perfilForm.patchValue({
      'nombre': userData.nombre,
      'apellido': userData.apellido,
      'username': userData.alias,
      'fecha de nacimiento': userData.fechaNacimiento,
      'email': userData.email
    })

    this.userLectura.push(userData.tipoDeLector)
    this.userBusqueda = userData.perfil

    this.puedeEditar()

  }

  async guardar() {
    if (this.perfilForm.valid) {
      await this.UserService.actualizarInfoUsuario(new UserInformacion(
        1,
        this.perfilForm.get("nombre")?.value,
        this.perfilForm.get("apellido")?.value,
        this.perfilForm.get("username")?.value,
        null,
        this.perfilForm.get("fecha de nacimiento")?.value,
        this.perfilForm.get("email")?.value,
        this.userBusqueda,
        this.userLectura[0]
      ))
    }
    else {
      alert("El formulario tiene campos inválidos")
    }

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



