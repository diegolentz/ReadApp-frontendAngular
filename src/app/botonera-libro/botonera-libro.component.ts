import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-botonera-libro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botonera-libro.component.html',
  styleUrl: './botonera-libro.component.css'
})
export class BotoneraLibroComponent {
  constructor(private router: Router) {
  }
  mostrar(id: string): boolean {
    if (id === 'borrar' && this.router.url === '/search-books') {
      return true;
    }
    if (id === 'aleer' && this.router.url === '/books-readed') {
      return true;
    }
    if (id === 'leido' && this.router.url === '/books-to-read') {
      return true;
    }
    return false;
  }
}
