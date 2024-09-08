import { Component, input } from '@angular/core';

@Component({
  selector: 'app-amigos',
  standalone: true,
  imports: [],
  templateUrl: './amigos.component.html',
  styleUrl: './amigos.component.css'
})

export class AmigosComponent {
  title = 'Amigo'
  amigo = new Amigo

}

class Amigo {
  imagen = 'icono.jpg'
  nombre = 'Inosuke Hashibira'
  mail   = 'inosukehashibira@gmail.com'

}

