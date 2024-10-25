import { Component, HostBinding, OnInit } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../domain/book';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VolverAtrasComponent } from '../volver-atras/volver-atras.component';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';

@Component({
  selector: 'app-libros-agregar',
  standalone: true,
  imports: [LibroComponent, CommonModule, VolverAtrasComponent, BtnGuardarCancelarComponent],
  templateUrl: './libros-agregar.component.html',
  styleUrls: ['./libros-agregar.component.css']
})
export class LibrosAgregarComponent implements OnInit {
  @HostBinding('style.width') width: string = '100%';
  tipoContenido!: string;
  estado!: boolean;
  books: Book[] = []; // Inicializa como un arreglo vacío
  librosAgregados: number[] = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    public bookService: BookService,
    public router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.queRenderizo();
    await this.mostrarLibros();
  }

  queRenderizo() {
    this.route.params.subscribe(params => {
      this.tipoContenido = params['tipo'];
      this.estado = (this.tipoContenido === 'readed');
    });
  }


  async mostrarLibros() {
    try {
      this.id = Number(localStorage.getItem('id'));
      this.books = (this.tipoContenido === 'to-read')
        ? await this.bookService.obtenerParaLeer(this.id)
        : await this.bookService.obtenerLibrosPorEstado(this.id, !this.estado);
    } catch (error: any) {
      console.error(error);
      alert('Error al cargar los libros. Intente nuevamente más tarde.'); // Notificar al usuario
    }
  }

  sacalodelaVista(libro: string) {
    const id = Number(libro);
    this.librosAgregados.push(id);
    this.books = this.books.filter(book => book.id !== id);
  }

  async agregarLibros() {
    await this.bookService.agregarLibro(this.id, this.librosAgregados, this.estado);
    await this.mostrarLibros(); // Espera a que se complete
    this.router.navigate(['/my-profile/books/', this.tipoContenido]);
  }

  volverHome() {
    this.router.navigate(['home']);
  }
}
