import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgFor, RecomendacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  libros = [
    new Libro("LoveCraft"),
    new Libro("Howard Phillipe"),
    new Libro("Sheldon Cooper"),
    new Libro("Howard Wollowitz")
  ]
  recomendaciones = [
    new Recomendacion("A", true, "aaa",[this.libros[0], this.libros[1]], 5, 10),
    new Recomendacion("B", false, "aaa",[this.libros[1]], 1.5, 3),
    new Recomendacion("C", true, "aaa",[this.libros[2]], 2.5, 4),
    new Recomendacion("D", false, "aaa",[this.libros[3]], 6.5, 20),
    new Recomendacion("R", true, "aaa",[this.libros[0]], 1.5, 100),
    new Recomendacion("F", false, "aaa",[this.libros[1]], 2.5, 40),
  ]
}

export class Recomendacion{
  constructor(
    public titulo:string,
    public pertenencia:boolean,
    public descripcion:string,
    public librosRecomendados:Array<Libro>,
    public puntuacion:number,
    public tiempoEstimado:number
  ){}

  get cantidadLibros(){
    return this.librosRecomendados.length
  }
}

export class Libro {
  constructor(
    public titulo:string
  ){}
}



