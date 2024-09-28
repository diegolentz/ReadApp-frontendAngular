import { Component,  } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { NavComponent } from '../nav/nav.component';
import { ContenedorSectionComponent } from '../contenedor-section/contenedor-section.component';
import {  LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-busqueda-libros',
  standalone: true,
  imports: [HeaderComponent, LibroComponent, NavComponent, ContenedorSectionComponent,CommonModule, ContainerBooksComponent],
  templateUrl: './busqueda-libros.component.html',
  styleUrl: './busqueda-libros.component.css'
})
export class BusquedaLibrosComponent {
  
  constructor(public bookService: BookService) { }
  books!: Book[];
  async ngOnInit() {

    
    this.books = await this.bookService.obtenerLibros();
  }
}