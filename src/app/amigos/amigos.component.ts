import { Component, Input } from '@angular/core';
import { Amigo } from '../contenedor-section/contenedor-section.component';

@Component({
  selector: 'app-amigos',
  standalone: true,
  imports: [],
  templateUrl: './amigos.component.html',
  styleUrl: './amigos.component.css'
})

export class AmigosComponent {
  title = 'Amigo'
  @Input() amigo!:Amigo

}


