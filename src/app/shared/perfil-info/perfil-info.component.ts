import { Component,HostBinding } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../input/input.component';

import { Username, NombreApellido,  Password, Email, Texto, Fecha, Numero} from '../../input/input.component';

@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent, CommonModule, InputComponent],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  @HostBinding('style.width') width: string = '100%';
  username = Username;
  nombreApellido = NombreApellido
  password = Password;
  email = Email;
  texto = Texto;
  fecha = Fecha;
  numero = Numero;
  mostrarCalculador = new MostrarCalculador();
}

class MostrarCalculador{
  mostrar:boolean = false

  show(){
    this.mostrar = !this.mostrar
  }
}