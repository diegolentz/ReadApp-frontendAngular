import { Component,HostBinding } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../input/input.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent, CommonModule, InputComponent,FormsModule],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  @HostBinding('style.width') width: string = '100%';

  mostrarCalculador = new MostrarCalculador();
  texto : string = "";
  numero !: string;
  mostrarNuevosInputs: boolean = false; 

  ngOnInit() {
    console.log(this.texto);
  }
  mostrar(event: any) {
    this.mostrarNuevosInputs = event.target.checked; // Actualiza según si el checkbox está marcado o no
  }

}

class MostrarCalculador{
  mostrar:boolean = false

  show(){
    this.mostrar = !this.mostrar
  }
}