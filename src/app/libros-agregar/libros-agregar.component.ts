import { Component, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from '../shared/layouts/books/books.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-libros-agregar',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, CommonModule,],
  templateUrl: './libros-agregar.component.html',
  styleUrl: './libros-agregar.component.css'
})
// export class LibrosAgregarComponent {
//   constructor(public bookService: BookService) { }

//   books!: Book[];
//   async ngOnInit(): Promise<void> {

//     await this.obtenerLibrosALeer();
//   }

//   async obtenerLibrosALeer() {
//     this.books = await this.bookService.obtenerALeer();
//   }
// }

export class LibrosAgregarComponent implements OnInit {
  constructor(private route: ActivatedRoute, public bookService: BookService) { }

  tipoContenido: string | null = null;
  books!: Book[];

  async ngOnInit(): Promise<void> {
    this.tipoContenido = this.route.snapshot.paramMap.get('origen');

    (this.tipoContenido === 'agregarLeidos') ? await this.dameALeer() : await this.dameLeidos();

  }

  async dameLeidos() {
    this.books = await this.bookService.obtenerLibros();
  }

  async dameALeer() {
    this.books = await this.bookService.obtenerALeer();
  }
}
