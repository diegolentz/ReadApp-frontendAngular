import { Component, OnInit } from '@angular/core';
import { ProfileBooksReadedComponent } from "../profile-books-readed/profile-books-readed.component";
import { HeaderComponent } from "../shared/header/header.component";
import { ResenaComponent } from "../resena/resena.component";
import { BotonAgregarComponent } from "../shared/boton-agregar/boton-agregar.component";
import { ValoracionComponent } from '../valoracion/valoracion.component';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { Recommendation } from '../../domain/recommendation';
import { LibroComponent } from "../libro/libro.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { RecommendationService } from '../../service/recommendation.service';
import { Book } from '../../domain/book';
import { FormsModule } from '@angular/forms';
import { VolverAtrasComponent } from "../volver-atras/volver-atras.component";
import { BookService } from '../../service/book.service';
@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ProfileBooksReadedComponent, HeaderComponent, ResenaComponent, BotonAgregarComponent, ValoracionComponent, ContainerBooksComponent, LibroComponent, BtnGuardarCancelarComponent, VolverAtrasComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrls: ['./view-recommendation.component.css']
})
export class ViewRecommendationComponent implements OnInit {
  constructor(private recommendationService: RecommendationService, private router: Router, private route: ActivatedRoute, public libroService: BookService) { }

  recomendacion: Recommendation = new Recommendation()
  puedeEditar !: boolean
  librosQuePuedoAgregar: Book[] = []


  async ngOnInit() {
    this.esEditable()
    this.traerRecomendacion()
    this.librosLeidos()
  }
  async librosLeidos() {
    try {
      const idUser = Number(localStorage.getItem('id'));
      const librosLeidos = await this.libroService.obtenerLibrosPorEstado(idUser, true);
      this.librosQuePuedoAgregar = librosLeidos.filter(libro =>
        !this.recomendacion.recommendedBooks.some(recommendedBook => recommendedBook.id === libro.id)
      );
    } catch (error) {
      console.error('Error al obtener los libros:', error);
    }
  }

  esEditable() {
    const isEdit = this.route.snapshot.url[1].path === 'edit';
    this.puedeEditar = isEdit;
  }

  traerRecomendacion() {
    this.route.params.subscribe(async (viewRecommendationParams) => {
      const recomendacionId = viewRecommendationParams['id'];
      try {
        this.recomendacion = await this.recommendationService.getRecommendationById(recomendacionId);
        // console.log(this.recomendacion.recommendedBooks.length)
      } catch (error) {
        console.error('Error al obtener la recomendación:', error);
      }
    });
  }

  sacarLibro(libro: string) {
    var id = Number(libro);

    // Encuentra el índice del libro a eliminar en el array
    const index = this.recomendacion.recommendedBooks.findIndex((libro: Book) => libro.id == id);
    this.recomendacion.recommendedBooks.splice(index, 1);
    // console.log(this.recomendacion.recommendedBooks.length)

  }
  agregarLibro(libro: string) {
    var id = Number(libro);
    //  tengo qe buscar ese id en los libros que puedo agregar
    var libroAgregado = this.librosQuePuedoAgregar.find((libro: Book) => libro.id == id);
    this.librosQuePuedoAgregar = this.librosQuePuedoAgregar.filter((libro: Book) => libro.id !== id);
    if (libroAgregado) {
      this.recomendacion.recommendedBooks.push(libroAgregado);
    } else {
      console.error('Libro no encontrado para agregar:', id);
    }
  }


  async editarRecomendacion() {
    await this.recommendationService.actualizarRecomendacion(this.recomendacion)
    this.traerRecomendacion()
    this.librosLeidos()
  }

  cancelar() {
    this.goTo('/home/home')
  }

  goTo(option: string) {
    this.router.navigate([option])
  }
}
