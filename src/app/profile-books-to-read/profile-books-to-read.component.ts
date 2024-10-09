import { Component, HostBinding, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { NgFor } from '@angular/common';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';
@Component({
  selector: 'app-profile-books-to-read',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, NgFor, BotonAgregarComponent, BtnGuardarCancelarComponent],
  templateUrl: './profile-books-to-read.component.html',
  styleUrl: './profile-books-to-read.component.css'
})
export class ProfileBooksToReadComponent implements OnInit {
  @HostBinding('style.width') width: string = '100%';
  constructor(public bookService: BookService) { }

  books: Book[] = [];
  librosAgregados: Number[] = [];

  async ngOnInit(): Promise<void> {
    this.books = await this.bookService.obtenerLibrosPorEstado(false);
  }

  sacalodelaVista(libro: string) {
    var id = Number(libro)
    this.librosAgregados.push(id)
    console.log(this.librosAgregados)
    this.books = this.books.filter(book => book.id !== id);
  }
}
