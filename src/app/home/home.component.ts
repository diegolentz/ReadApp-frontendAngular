import { Component, OnInit } from '@angular/core';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';

import { RecommendationService } from '../../service/recommendation.service';
import { Recommendation, RecommendationCard } from '../../domain/recommendation';
import { NavComponent } from '../nav/nav.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendacionComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  recommendations: RecommendationCard[] = [];
  filtro: string = ""

  constructor(private recommendationService: RecommendationService, private activatedRt: ActivatedRoute, private rt: Router, private toast: ToastrService) { }

  async ngOnInit() {
    this.activatedRt.params.subscribe(async params => {
      this.showRecommendations(params)
    });
  }

  async showRecommendations(params:Params){
    if (params['privates'] !== undefined) {

      const privateOnly = params['privates'] === 'true'; // Convert to boolean
      this.showUserRecommendations(privateOnly)

    } else {

      this.showAllRecommendations()

    }
  }
  async addFilter(newFilter: string) {
    try {
      this.filtro = newFilter;
      this.recommendations = await this.recommendationService.getRecommendationsFilter(this.filtro)
      if(this.recommendations.length == 0){
        this.toast.info('No se encontraron recomendaciones', 'Error');
      }
    } catch (error) {
      this.toast.info('No se encontraron recomendaciones', 'Error');
    }
  }

  async showAllRecommendations() {
    this.recommendations = await this.recommendationService.getRecommendationsByProfile()
  }

  async showUserRecommendations(privates: boolean) {
    this.recommendations = await this.recommendationService.getUserRecommendations(privates)

  }
  

}
