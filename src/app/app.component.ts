import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroComponent } from "./libro/libro.component";  
import { AmigosComponent } from "./amigos/amigos.component";
import { ContenedorSectionComponent } from "./contenedor-section/contenedor-section.component";
import { ResenaComponent } from './resena/resena.component';
import {ValoracionComponent} from './valoracion/valoracion.component'
import { NavComponent } from './nav/nav.component';
import { BotoneraLibroComponent } from './botonera-libro/botonera-libro.component';
import { HeaderComponent } from './shared/header/header.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { BusquedaLibrosComponent } from "./busqueda-libros/busqueda-libros.component";
import { PanelPerfilComponent } from "./panel-perfil/panel-perfil.component";
import { BtnGuardarCancelarComponent } from './shared/btn-guardar-cancelar/btn-guardar-cancelar.component';
import { InputBoxComponent } from './shared/input-box/input-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputBoxComponent,ResenaComponent,BtnGuardarCancelarComponent, NavComponent, MiPerfilComponent, HeaderComponent, ResenaComponent, BotoneraLibroComponent, AmigosComponent, ContenedorSectionComponent, ValoracionComponent, LibroComponent, BusquedaLibrosComponent, PanelPerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'readapp-2024-grupo-9';
}

