import { Component, HostBinding, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-profile-books-to-read',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, NgFor],
  templateUrl: './profile-books-to-read.component.html',
  styleUrl: './profile-books-to-read.component.css'
})
export class ProfileBooksToReadComponent implements OnInit {
  @HostBinding('style.width') width: string = '100%';

  constructor(public bookService: BookService) { }

  books!: Book[];
  async ngOnInit(): Promise<void> {

    await this.obtenerLibrosALeer();
  }

  async obtenerLibrosALeer() {
    this.books = await this.bookService.obtenerALeer();
  }
}
