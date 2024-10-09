import { Component, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from '../shared/layouts/books/books.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { ActivatedRoute } from '@angular/router';
import { VolverAtrasComponent } from '../volver-atras/volver-atras.component';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';

@Component({
  selector: 'app-libros-agregar',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, CommonModule, VolverAtrasComponent, BtnGuardarCancelarComponent],
  templateUrl: './libros-agregar.component.html',
  styleUrl: './libros-agregar.component.css'
})
export class LibrosAgregarComponent implements OnInit {
  constructor(private route: ActivatedRoute, public bookService: BookService) { }

  tipoContenido!: string;

  books!: Book[];
  librosAgregados: Number[] = [];

  async ngOnInit(): Promise<void> {
    this.queRenderizo();
    await this.mostrarLibros();
  }


  queRenderizo() {
    this.route.params.subscribe(params => {
      this.tipoContenido = params['tipo'];
    });
  }

  async mostrarLibros() {
    this.books = (this.tipoContenido === 'books-to-read')
      ? await this.bookService.obtenerParaLeer()
      : await this.bookService.obtenerLibrosPorEstado(false);
  }

  sacalodelaVista(libro: string) {
    var id = Number(libro)
    this.librosAgregados.push(id)
    console.log(this.librosAgregados)
    this.books = this.books.filter(book => book.id !== id);
  }

}