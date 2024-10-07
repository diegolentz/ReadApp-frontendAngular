import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookJSON } from '../domain/book';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  filtro: string = '';
  renderizar: string = '';

  libros!: Book;

  filtroCambiado = new EventEmitter<string>();
  libroCambiado = new EventEmitter<Book>();

  constructor(private httpClient: HttpClient) { }

  async obtenerLibros(): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosSearch');
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }

  async obtenerALeer(): Promise<Book[]> {
    // const userId = 1;//deberia usar localStorage
    const userId = Number(localStorage.getItem('id'));

    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosALeer', {
      params: { idUser: userId }

    });
    const bookJSON = await lastValueFrom(libros$);
    console.log(userId);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }

  async obtenerLeidos(): Promise<Book[]> {
    // const userId = 1;//deberia usar localStorage
    const userId = Number(localStorage.getItem('id'));
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosLeidos', {
      params: { idUser: userId } //
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }
  async obtenerParaLeer(): Promise<Book[]> {
    // const userId = 1;//deberia usar localStorage
    const userId = Number(localStorage.getItem('id'));
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/add-Books', {
      params: { idUser: userId }
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }

  // aplicarFiltro(filtro: string) {
  //   this.filtro = filtro;
  //   //filtro cambiado emite el cambio en filtro
  //   this.filtroCambiado.emit(this.filtro);
  //}
  quitarVista(book: Book) {
    this.libros = book;
    this.libroCambiado.emit(this.libros);

    // console.log(this.libros);
  }

}
