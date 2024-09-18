import { Component } from '@angular/core';
import { AmigosComponent } from "../amigos/amigos.component";
import { NgFor } from '@angular/common';
import { HostBinding } from '@angular/core';

import { HeaderComponent } from "../shared/header/header.component";  


@Component({
  selector: 'app-contenedor-section',
  standalone: true,
  imports: [AmigosComponent, NgFor, HeaderComponent],
  templateUrl: './contenedor-section.component.html',
  styleUrl: './contenedor-section.component.css'
})
export class ContenedorSectionComponent {
  @HostBinding('style.width') width: string = '100%';

  // @Input() opcion!: Option
  amigos = [
    new Amigo("icono.jpg", "Inosuke Hashibira", "inosukehashibira@gmail.com"),
    new Amigo("ippo.jpeg", "Ippo Makunouchi ", "ippomakunouchi90@hotmail.com"),
    new Amigo("dwightSchrute.jpeg", "Dwight Schrute", "dwightschrute@dunder-mifflin.com"),
    new Amigo("kevinMalone.jpeg", "Kevin Malone", "kevinmalone@dunder-mifflin.com"),
    new Amigo("creed.jpeg", "Creed Bratton", "creedbratton@dunder-mifflin.com"),
    new Amigo("kellyKapoor.jpeg", "Kelly Kapoor", "kellykapoor@dunder-mifflin.com"),

  ]
 }

export class Amigo {
  constructor(
    public imagen : string,
    public nombre: string,
    public mail : string){}


}
