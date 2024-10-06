import { Component } from '@angular/core';
import { AmigosComponent } from "../amigos/amigos.component";
import { NgFor } from '@angular/common';
import { HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";


@Component({
  selector: 'app-contenedor-section',
  standalone: true,
  imports: [AmigosComponent, NgFor, HeaderComponent, RouterOutlet],
  templateUrl: './contenedor-section.component.html',
  styleUrl: './contenedor-section.component.css'
})
export class ContenedorSectionComponent {
  @HostBinding('style.width') width: string = '100vw';

}

