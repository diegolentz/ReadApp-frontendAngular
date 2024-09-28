import { Component,HostBinding } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../input/input.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BtnGuardarCancelarComponent } from '../btn-guardar-cancelar/btn-guardar-cancelar.component';



@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent, CommonModule, InputComponent,FormsModule,BtnGuardarCancelarComponent],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  @HostBinding('style.width') width: string = '100%';

  perfilForm:FormGroup;
  

  mostrarCalculador = new MostrarCalculador();
  
  mostrarNuevosInputs: boolean = false; 

  boton = new BtnGuardarCancelarComponent()

  mostrar(event: any) {
    this.mostrarNuevosInputs = event.target.checked; // Actualiza según si el checkbox está marcado o no
  }


  constructor(private fb : FormBuilder){
    this.perfilForm = this.fb.group({
      'nombre de usuario':[],
      'apellido':[],
      'fecha de nacimiento':[],
      'email':[]
    })
  }
  
}

class MostrarCalculador{
  mostrar:boolean = false

  show(){
    this.mostrar = !this.mostrar
  }
}