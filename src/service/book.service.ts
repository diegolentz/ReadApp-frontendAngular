import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Book, BookJSON } from '../domain/book';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommonForm } from '../domain/forms';
import { id } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  libros!: Book;

  filtroCambiado = new EventEmitter<string>();
  libroCambiado = new EventEmitter<Book>();

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  async obtenerLibros(): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosSearch');
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));

  }

  async obtenerLibrosFiltrados(filtro: string): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosSearch/filter', {
      params: { filtro: filtro }
    });
    const bookJSON = await lastValueFrom(libros$);
    const libros = bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
    return libros;
  }

  async obtenerLibrosPorEstado(userId: number, booleano: boolean): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/obtenerlibroEstado', {
      params: { idUser: userId, estado: booleano }
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));

  }

  async agregarLibro(idUser: number, idLibro: number[], estado: boolean): Promise<void> {
    await lastValueFrom(this.httpClient.put(REST_SERVER_URL + '/agregarLibroEstado',
      { idUser, estado, idLibro }
    ));
    if (idLibro.length > 0) {
      this.toastr.success('Libro agregado con exito');
    }
  }

  async obtenerParaLeer(idUser: number): Promise<Book[]> {
    const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/add-Books', {
      params: { idUser: idUser }
    });
    const bookJSON = await lastValueFrom(libros$);
    return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
  }

  async eliminarLibro(idUser: number, idLibro: number[], estado: boolean): Promise<void> {
    await lastValueFrom(this.httpClient.delete(REST_SERVER_URL + '/eliminarLibroEstado', {
      body: { idUser, estado, idLibro }
    }));
    if (idLibro.length > 0) {
      this.toastr.success('Libro agregado con exito');
    }
  }

  httpErrorHandler(error: HttpErrorResponse) {
    if (error.error['status'] == null) {
      this.toastr.error('Serivor caido :,(. Intente mas tarde')
    }

    if (error.error['status'] == 200) {
      this.toastr.success(error.error['message'])

    }

    if (error.error['status'] == 400) {
      this.toastr.warning(error.error['message'])
    }

    if (error.error['status'] == 404) {
      this.toastr.error(error.error['message'])
    }
  }
}