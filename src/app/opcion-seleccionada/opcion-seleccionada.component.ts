
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AmigosComponent } from "../amigos/amigos.component";
import { NgFor, NgClass } from '@angular/common';
import { HostBinding } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PerfilInfoComponent } from '../shared/perfil-info/perfil-info.component';
import { LibroComponent } from '../libro/libro.component';

import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';


@Component({
  selector: 'app-opcion-seleccionada',
  standalone: true,
  imports: [NgClass],
  templateUrl: './opcion-seleccionada.component.html',
  styleUrl: './opcion-seleccionada.component.css'
})
export class OpcionSeleccionadaComponent implements OnInit {
  @HostBinding('style.width') width: string = '100%';
  @HostBinding('style.height') height: string = '100%';
  @ViewChild('contenedor', { read: ViewContainerRef, static: true }) contenedor!: ViewContainerRef;

  constructor( private route: ActivatedRoute) {}

  titulo!: string;
  componente!: any;
  layoutClass!:string;

  ngOnInit(): void {
    // Observer a la ruta
    this.route.url.subscribe(arg => {
      const opcionSeleccionada = arg.at(0)?.path ?? ''
      this.cargarComponente(opcionSeleccionada)
      console.log(arg.at(0)?.path)
    })
  }
  
  cargarComponente(opcionSeleccionada: string) {
    // Limpia el contenedor antes de cargar un nuevo componente
    this.contenedor.clear();

    this.titulo = this.capitalizeFirstLetter(this.parseLabelFromRoute(opcionSeleccionada));
    this.layoutClass = opcionSeleccionada
    this.componente = opciones.get(opcionSeleccionada)
    // Dependiendo de la opción, elige el componente a cargar
    this.contenedor.createComponent(this.componente)
  }
  parseLabelFromRoute(label: string): string {
    // Input(path-1) => Output(path 1)
    return label.toLowerCase().replace(/[-]/g, ' ')
  }
  capitalizeFirstLetter(string:string) {
    // Input(path 1) => Output(Path 1)
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
// ESTO HAY QUE LIMPIARLO Y DEJARLO EN UN ARCHIVO EN APARTE
export class Amigo {
  constructor(
    public imagen : string,
    public nombre: string,
    public mail : string){}
}

let opciones = new Map<string, any>([
  ["informacion", PerfilInfoComponent],
  ["amigos", AmigosComponent],
  ["libros-leidos", LibroComponent],
  ["libros-a-leer", LibroComponent],
  ["recomendaciones-a-", RecomendacionComponent]
]);

