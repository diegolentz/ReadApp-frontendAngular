import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { BookService } from '../../service/book.service';
import { Book } from '../../domain/book';
import { NgFor } from '@angular/common';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';
import { UserBasic } from '../../domain/tmpUser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile-books-readed',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, NgFor, BotonAgregarComponent, BtnGuardarCancelarComponent],
  templateUrl: './profile-books-readed.component.html',
  styleUrl: './profile-books-readed.component.css'
})
export class ProfileBooksReadedComponent implements OnInit {
  @HostBinding('style.width') width: string = '100%';
  constructor(public bookService: BookService, public route: Router, private router: ActivatedRoute) { }

  books: Book[] = [];
  librosAgregados: number[] = [];
  tipoContenido!: string;
  estado!: boolean;
  id !: number;

  @Input() user!: UserBasic;

  async ngOnInit(): Promise<void> {
    this.queRenderizo();
    await this.mostrarLibros();
  }
  async mostrarLibros() {
    try {
      this.id = Number(localStorage.getItem('id'));

      this.estado = this.tipoContenido === 'readed';
      this.books = this.estado
        ? await this.bookService.obtenerLibrosPorEstado(this.id, true)
        : await this.bookService.obtenerLibrosPorEstado(this.id, false);
    } catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        console.log(error.error["timestamp"])
        console.log(error.error["status"])
        console.log(error.error["error"])
        console.log(error.error["message"])
        console.log(error.error["path"])
      }
    }
  }

  queRenderizo() {
    this.router.params.subscribe(params => {
      this.tipoContenido = params['tipo'];
      this.mostrarLibros(); // llamo a la funcion para que me muestre los libros segun el tipo de contenido
    });
  }
  sacalodelaVista(libro: string) {
    var id = Number(libro)
    this.librosAgregados.push(id)
    console.log(this.librosAgregados)
    this.books = this.books.filter(book => book.id !== id);
  }

  async eliminarLibros() {
    await this.bookService.eliminarLibro(this.id, this.librosAgregados, this.estado); // true = leidos
    this.mostrarLibros();
  }
  volverHome() {
    this.route.navigate(['home']);
  }
}
