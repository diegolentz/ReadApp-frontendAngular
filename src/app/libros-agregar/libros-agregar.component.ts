import { Component, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { ContainerBooksComponent } from '../shared/layouts/books/books.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VolverAtrasComponent } from '../volver-atras/volver-atras.component';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';

@Component({
  selector: 'app-libros-agregar',
  standalone: true,
  imports: [LibroComponent, ContainerBooksComponent, CommonModule, VolverAtrasComponent, BtnGuardarCancelarComponent],
  templateUrl: './libros-agregar.component.html',
  styleUrl: './libros-agregar.component.css'
})
export class LibrosAgregarComponent implements OnInit {
  constructor(private route: ActivatedRoute, public bookService: BookService, public router: Router) { }

  tipoContenido!: string;
  estado!: boolean;

  books!: Book[];
  librosAgregados: number[] = [];
  id !: number;

  async ngOnInit(): Promise<void> {
    this.queRenderizo();
    await this.mostrarLibros();
  }

  queRenderizo() {
    this.route.params.subscribe(params => {
      this.tipoContenido = params['tipo'];
      this.estado = (this.tipoContenido === 'readed'); //para manejar a quien se lo agrego
    });
  }

  async mostrarLibros() {
    try {
      this.id = Number(localStorage.getItem('id'));
      this.books = (this.tipoContenido == 'to-read')
        ? await this.bookService.obtenerParaLeer(this.id)
        : await this.bookService.obtenerLibrosPorEstado(this.id, !this.estado);
    } catch (error: any) {
      console.log(error);
    }
  }

  sacalodelaVista(libro: string) {
    var id = Number(libro)
    this.librosAgregados.push(id)
    console.log(this.librosAgregados)
    this.books = this.books.filter(book => book.id !== id);
  }
  async agregarLibros() {
    await this.bookService.agregarLibro(this.id, this.librosAgregados, this.estado);
    window.history.back();
  }
  volverHome() {
    this.router.navigate(['home']);
  }
}