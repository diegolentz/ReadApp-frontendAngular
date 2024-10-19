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
@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ProfileBooksReadedComponent, HeaderComponent, ResenaComponent, BotonAgregarComponent, ValoracionComponent, ContainerBooksComponent, LibroComponent, BtnGuardarCancelarComponent, VolverAtrasComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrl: './view-recommendation.component.css'
})
export class ViewRecommendationComponent implements OnInit {
  constructor(private recommendationService: RecommendationService, private router: Router, private route: ActivatedRoute) { }

  recomendacion: Recommendation = new Recommendation()
  puedeEditar !: boolean


  async ngOnInit() {
    this.esEditable()
    this.traerRecomendacion()
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

  sacalodelaVista(libro: string) {
    var id = Number(libro);

    // Encuentra el índice del libro a eliminar en el array
    const index = this.recomendacion.recommendedBooks.findIndex((libro: Book) => libro.id == id);
    this.recomendacion.recommendedBooks.splice(index, 1);
    console.log(this.recomendacion.recommendedBooks.length)

  }


  async editarRecomendacion() {
    await this.recommendationService.actualizarRecomendacion(this.recomendacion)
    this.traerRecomendacion()
  }

  cancelar() {
    this.goTo('/home')
  }

  goTo(option: string) {
    this.router.navigate([option])
  }
}
