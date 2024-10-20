import { Component, OnInit } from '@angular/core';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';

import { RecommendationService } from '../../service/recommendation.service';
import { Recommendation, RecommendationCard } from '../../domain/recommendation';
import { NavComponent } from '../nav/nav.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendacionComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  recommendations: RecommendationCard[] = [];
  allRecomendations!: Recommendation[];
  filtro: string = ""

  constructor(private recommendationService: RecommendationService, private activatedRt:ActivatedRoute, private rt:Router) { }

  ngOnInit() {
    this.rt.events.subscribe(() => {
      console.log('Route changed to:', this.rt.url);
      this.showRecommendations()
    });
    
  }
  
  async addFilter(newFilter: string) {
    this.filtro = newFilter
    this.allRecomendations = await this.recommendationService.getRecommendationsFilter(this.filtro)
  }

  showRecommendations() {
    if(this.isHome()){
      this.showAllRecommendations()
    }
    if(this.isMyRecommendation()){
      this.showUserRecommendations()
    }
  }

  isHome():boolean{
    return this.rt.url === "/home/home"
  }
  isMyRecommendation():boolean{
    return this.rt.url === "/home/myRecommendations"
  }
  async showAllRecommendations(){
    this.recommendations = await this.recommendationService.getAllRecommendations()
  }

  async showUserRecommendations(){
    this.recommendations = await this.recommendationService.getUserRecommendations(false)
    // try {
    //   this.isHome()
    //   this.isMyRecommendation()
    //   console.log(`Estoy en home:${this.showHome}`)
    //   console.log(`Ruta:${this.rt.url}`)
    //   this.allRecomendations = this.showHome
    //     ? await this.recommendationService.getUserRecommendations(true)
    //     : await this.recommendationService.getUserRecommendations(false);
    // } catch (error: any) {
    //   if (error instanceof HttpErrorResponse) {
    //     console.log(error.error["timestamp"])
    //     console.log(error.error["status"])
    //     console.log(error.error["error"])
    //     console.log(error.error["message"])
    //     console.log(error.error["path"])
    //   }
    // }
  }

  getRecommendationsByRoute(path:string){
    if(this.isHome()){
      this.showAllRecommendations()
    }
    if(this.isMyRecommendation()){
      this.showUserRecommendations()
    }
  }
}
