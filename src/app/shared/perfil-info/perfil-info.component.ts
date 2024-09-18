import { Component,HostBinding } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent, CommonModule],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  @HostBinding('style.width') width: string = '100%';
  mostrarCalculador = new MostrarCalculador();
}

class MostrarCalculador{
  mostrar:boolean = false

  show(){
    this.mostrar = !this.mostrar
  }
}