import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookJSON } from '../domain/book';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  filtro: string = 'frontera';
  renderizar: string = '';
  allBooks: Book[] = [];

  filtroCambiado = new EventEmitter<string>(); // necesito emitir el cambio de criterio de busqueda

  constructor(private httpClient: HttpClient) { }

  async obtenerLibros(): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosSearch');
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }

  async obtenerALeer(): Promise<Book[]> {
    const userId = 1;//deberia usar localStorage
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosALeer', {
      params: { idUser: userId }
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }

  async obtenerLeidos(): Promise<Book[]> {
    const userId = 1;//deberia usar localStorage
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosLeidos', {
      params: { idUser: userId } //
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }
  async obtenerParaLeer(): Promise<Book[]> {
    const userId = 1;//deberia usar localStorage
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/add-Books', {
      params: { idUser: userId }
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }
  render(render: string) {
    this.renderizar = render;
  }
  aplicarFiltro(filtro: string) {
    this.filtro = filtro;
    //filtro cambiado emite el cambio en filtro
    this.filtroCambiado.emit(this.filtro);
  }

  async obtenerLibrosFiltrados(): Promise<Book[]> {
    //MODIFICAR PARA QUE DEVUELVA CON EL FILTRO 
    this.allBooks = await this.obtenerLibros()

    this.filtroCambiado.subscribe(
      (nuevoFiltro: string) => {
        //exp regular para quitar espacios en blanco y convertir a minusculas
        this.allBooks = nuevoFiltro ?
          (this.allBooks.filter((book) => book.title.replace(/\s+/g, '').toLowerCase().includes(
            nuevoFiltro.replace(/\s+/g, '').toLowerCase()) ||
            book.author.replace(/\s+/g, '').toLowerCase().includes(nuevoFiltro.replace(/\s+/g, '').toLowerCase()))) :
          (this.allBooks);
      }
    );

    return this.allBooks
  }

  async agregarLibrosRender(): Promise<Book[]> {
    if (this.renderizar == 'agregarLeidos') {
      return this.obtenerALeer();
    } else {
      return this.obtenerParaLeer();
    }
  }
}
