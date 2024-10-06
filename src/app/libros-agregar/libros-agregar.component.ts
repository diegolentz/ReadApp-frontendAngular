import { Component, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from '../shared/layouts/books/books.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { ActivatedRoute } from '@angular/router';
import { VolverAtrasComponent } from '../volver-atras/volver-atras.component';

@Component({
  selector: 'app-libros-agregar',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, CommonModule, VolverAtrasComponent],
  templateUrl: './libros-agregar.component.html',
  styleUrl: './libros-agregar.component.css'
})
export class LibrosAgregarComponent implements OnInit {
  constructor(private route: ActivatedRoute, public bookService: BookService) { }

  tipoContenido!: string;

  books!: Book[];
  librosAgregados: Book[] = [];

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.tipoContenido = params['tipo'];
    });

    await this.mostrarLibros();
  }

  async mostrarLibros() {
    this.books = (this.tipoContenido === 'books-to-read')
      ? await this.bookService.obtenerParaLeer()
      : await this.bookService.obtenerALeer();

    this.bookService.libroCambiado.subscribe(
      (nuevoLibro: Book) => {
        this.librosAgregados.push(nuevoLibro);
        this.books = this.books.filter(book => book.id !== nuevoLibro.id);
      }
    );
  }
}