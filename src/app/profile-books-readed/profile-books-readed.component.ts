import { Component, HostBinding, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { BookService } from '../../service/book.service';
import { Book } from '../../domain/book';
import { NgFor } from '@angular/common';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';

@Component({
  selector: 'app-profile-books-readed',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, NgFor, BotonAgregarComponent],
  templateUrl: './profile-books-readed.component.html',
  styleUrl: './profile-books-readed.component.css'
})
export class ProfileBooksReadedComponent implements OnInit {
  @HostBinding('style.width') width: string = '100%';
  constructor(public bookService: BookService) { }

  books!: Book[];
  async ngOnInit(): Promise<void> {
    await this.obtenerLibrosLeidos();
  }


  async obtenerLibrosLeidos() {
    this.books = await this.bookService.obtenerLeidos();
  }
}
