import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookJSON } from '../domain/book';
import { REST_SERVER_URL } from './configuration';
import { firstValueFrom, lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  async obtenerLibros(): Promise<Book[]> {
    // llamada al servidor para obtener la lista de libros en formato BookJSON.
    const libros$ = this.httpClient.get<BookJSON[]>(`${REST_SERVER_URL}/libros`);
    const bookJSON = await lastValueFrom(libros$);

    // Mapea cada objeto JSON a una instancia de la clase `Book`.
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }
}