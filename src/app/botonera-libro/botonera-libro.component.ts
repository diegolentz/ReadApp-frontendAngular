import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
@Component({
  selector: 'app-botonera-libro',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './botonera-libro.component.html',
  styleUrl: './botonera-libro.component.css'
})
export class BotoneraLibroComponent {
  constructor(private router: Router, private bookService: BookService) {
  }

  @Input() libro!: Book

  ocultarBorrar(): boolean {

    // hago un map con las rutas / valor y comparo con el parametro que recibo
    const excludedRoutes = ['/search-books', '/my-profile/add-books/books-to-read', '/my-profile/add-books/books-readed'];
    return !excludedRoutes.includes(this.router.url);
  }

  ocultarAgregar(): boolean {
    // hago un map con las rutas / valor y comparo con el parametro que recibo
    const excludedRoutes = ['/my-profile/add-books/books-readed', '/my-profile/add-books/books-to-read'];
    return excludedRoutes.includes(this.router.url);
  }

  agregar(libro: Book) {
    this.bookService.quitarVista(libro);
  }
}
