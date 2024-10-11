import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookJSON } from '../domain/book';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  libros!: Book;

  filtroCambiado = new EventEmitter<string>();
  libroCambiado = new EventEmitter<Book>();

  constructor(private httpClient: HttpClient) { }

  async obtenerLibros(): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosSearch');
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }
  // si es true = leidos, si es false = a leer
  async obtenerLibrosPorEstado(booleano: boolean): Promise<Book[]> {
    const userId = 1;
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/obtenerlibroEstado', {
      params: { idUser: userId, estado: booleano }
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }
  async agregarLibro(idLibro: number[], estado: boolean): Promise<void> {
    const idUser = 1;
    await lastValueFrom(this.httpClient.put(REST_SERVER_URL + '/agregarLibroEstado',
      { idUser, estado, idLibro }
    ));
  }

  /* libros que se pueden agregar en a leer
   todos los libros - los que tiene leidos - los que ya tiene en a leer */
  async obtenerParaLeer(): Promise<Book[]> {
    const userId = 1;
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/add-Books', {
      params: { idUser: userId }
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }


}
