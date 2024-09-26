import { Component, HostBinding, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { BookService } from '../../service/book.service';
import { Book } from '../../domain/book';

@Component({
  selector: 'app-profile-books-readed',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent],
  templateUrl: './profile-books-readed.component.html',
  styleUrl: './profile-books-readed.component.css'
})
export class ProfileBooksReadedComponent implements OnInit {
  @HostBinding('style.width') width: string = '100%';
  constructor(public bookService:BookService) {}

  books!:Array<Book>
  ngOnInit(): void {
    this.books = this.bookService.mockGetBooks()  
  }
}
