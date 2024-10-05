import { Component, OnInit } from '@angular/core';
import { ProfileBooksReadedComponent } from "../profile-books-readed/profile-books-readed.component";
import { ProfileBooksToReadComponent } from "../profile-books-to-read/profile-books-to-read.component";
import { HeaderComponent } from "../shared/header/header.component";
import { ResenaComponent } from "../resena/resena.component";
import { BotonAgregarComponent } from "../shared/boton-agregar/boton-agregar.component";
import { ValoracionComponent } from '../valoracion/valoracion.component';
import { NgIf ,NgFor} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { Recommendation } from '../../domain/recommendation';
import { LibroComponent } from "../libro/libro.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { RecommendationService } from '../../service/recommendation.service';
import { recomendacionDefault, RECOMMENDATIONS } from '../../mock/mockRecommendations';
import { BtnVolverComponent } from "../btn-volver/btn-volver.component";
import { Book } from '../../domain/book';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [FormsModule,NgFor, NgIf, ProfileBooksReadedComponent, ProfileBooksToReadComponent, HeaderComponent, ResenaComponent, BotonAgregarComponent, ValoracionComponent, ContainerBooksComponent, LibroComponent, BtnGuardarCancelarComponent, BtnVolverComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrl: './view-recommendation.component.css'
})
export class ViewRecommendationComponent implements OnInit{
  constructor(private recommendationService: RecommendationService, private router: Router, private route: ActivatedRoute) {}

  recomendacion:Recommendation = recomendacionDefault

  async ngOnInit() {
    this.route.params.subscribe(async (viewRecommendationParams) => {
      const recomendacionId = viewRecommendationParams['id'];
      try {
        this.recomendacion = await this.recommendationService.getRecommendationById(recomendacionId);
        console.log(this.recomendacion)
      } catch (error) {
        console.error('Error al obtener la recomendación:', error);
      }
    });
  }

  async editarRecomendacion(/*recomendacion:Recommendation*/){
    this.recommendationService.actualizarRecomendacion(this.recomendacion)
    console.log(this.recomendacion)
  
  }
  

  noPuedeEditar(){
    return false
  }

  goTo(option:string){
    this.router.navigate([option])
  }
}
