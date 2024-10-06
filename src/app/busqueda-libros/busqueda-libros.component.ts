import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../domain/book';
import { CommonModule } from '@angular/common';
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
  // allBooks: Book[] = [];
  filtro: string = ""

  constructor(public bookService: BookService) { }

  async ngOnInit() {

    this.books = await this.bookService.obtenerLibros();
    //this.books = await this.bookService.obtenerLibrosFiltrados();
    // await this.obtenerLibros();
    // this.obtenerLibros();

  }

  async addFilter(newFilter: string) {
    this.filtro = newFilter
    this.books = await this.bookService.obtenerLibros()
    this.books = this.filtro ?
      (this.books.filter((book) => book.title.replace(/\s+/g, '').toLowerCase().includes(
        this.filtro.replace(/\s+/g, '').toLowerCase()) ||
        book.author.replace(/\s+/g, '').toLowerCase().includes(this.filtro.replace(/\s+/g, '').toLowerCase()))) :
      (this.books);
  }

}


//   async obtenerLibros() {

//   //this.books = this.allBooks;
// }

// subscribirFiltroCambiado() {
//   this.bookService.filtroCambiado.subscribe(
//     (nuevoFiltro: string) => {
//       //exp regular para quitar espacios en blanco y convertir a minusculas
//       this.books = nuevoFiltro ?
//         (this.allBooks.filter((book) => book.title.replace(/\s+/g, '').toLowerCase().includes(
//           nuevoFiltro.replace(/\s+/g, '').toLowerCase()) ||
//           book.author.replace(/\s+/g, '').toLowerCase().includes(nuevoFiltro.replace(/\s+/g, '').toLowerCase()))) :
//         (this.allBooks);
//     }
//   );
// }


