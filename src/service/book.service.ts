import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOKS } from '../mock/mockBooks';
import { Book, BookJSON } from '../domain/book';
import { REST_SERVER_URL } from './configuration';
import { firstValueFrom, lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private httpClient: HttpClient) { }


  async obtenerLibros(): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(`${REST_SERVER_URL}/libros`);
    const bookJSON = await firstValueFrom(libros$);
    return bookJSON.map((bookJSON) => Book.fromJson(bookJSON));
  }

}
