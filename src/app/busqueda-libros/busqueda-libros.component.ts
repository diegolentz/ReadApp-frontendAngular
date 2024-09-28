import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../domain/book';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { NavComponent } from '../nav/nav.component';
import { ContenedorSectionComponent } from '../contenedor-section/contenedor-section.component';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from '../shared/layouts/books/books.component';

@Component({
  selector: 'app-busqueda-libros',
  standalone: true,
  imports: [HeaderComponent, LibroComponent, NavComponent, ContenedorSectionComponent, CommonModule, ContainerBooksComponent],
  templateUrl: './busqueda-libros.component.html',
  styleUrls: ['./busqueda-libros.component.css']
})
export class BusquedaLibrosComponent {
  books: Book[] = [];

  constructor(public bookService: BookService) {}

  async ngOnInit() {
    // me traigo los libros
    this.books = await this.bookService.obtenerLibros();

    // me subscribo a los cambios para filtrar
    this.bookService.filtroCambiado.subscribe(
      async (nuevoFiltro: string) => {this.books = await this.bookService.obtenerLibros();
      if (nuevoFiltro) {
        this.books = this.books.filter((book) =>
          book.titulo.toLowerCase().includes(nuevoFiltro.toLowerCase())
        );
      }
    });
  }
}
