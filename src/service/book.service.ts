import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Book, BookJSON } from '../domain/book';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommonForm } from '../domain/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  libros!: Book;

  filtroCambiado = new EventEmitter<string>();
  libroCambiado = new EventEmitter<Book>();

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  async obtenerLibros(): Promise<Book[]> {
    try {
      const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosSearch');
      const bookJSON = await lastValueFrom(libros$);
      return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.toastr.error('Error intente nuevamente mas tarde');
      }
      return [];
    }
  }

  async obtenerLibrosFiltrados(filtro: string): Promise<Book[]> {
    try {
      const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/librosSearch/filter', {
        params: { filtro: filtro }
      });
      const bookJSON = await lastValueFrom(libros$);
      const libros = bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
      if (libros.length === 0) {
        this.toastr.info('No se encontraron coincidencias realice una nueva busqueda');
      }
      return libros;
    } catch (error) {
      this.httpErrorHandler(error)
    }
    return [];
  }

  async obtenerLibrosPorEstado(userId: number, booleano: boolean): Promise<Book[]> {
    try {
      const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/obtenerlibroEstado', {
        params: { idUser: userId, estado: booleano }
      });
      const bookJSON = await lastValueFrom(libros$);
      return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
    } catch (error) {
      console.error('Error fetching books by state:', error);
      throw error;
    }
  }

  async agregarLibro(idUser: number, idLibro: number[], estado: boolean): Promise<void> {
    try {
      await lastValueFrom(this.httpClient.put(REST_SERVER_URL + '/agregarLibroEstado',
        { idUser, estado, idLibro }
      ));
    } catch (error) {
      console.error('Error adding book:', error);
      throw error;
    }
  }

  async obtenerParaLeer(idUser: number): Promise<Book[]> {
    try {
      const libros$ = this.httpClient.get<BookJSON[]>(REST_SERVER_URL + '/add-Books', {
        params: { idUser: idUser }
      });
      const bookJSON = await lastValueFrom(libros$);
      return bookJSON.map((libroJSON) => Book.fromJson(libroJSON));
    } catch (error) {
      console.error('Error fetching books to read:', error);
      throw error;
    }
  }

  async eliminarLibro(idUser: number, idLibro: number[], estado: boolean): Promise<void> {
    try {
      await lastValueFrom(this.httpClient.delete(REST_SERVER_URL + '/eliminarLibroEstado', {
        body: { idUser, estado, idLibro }
      }));
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
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
