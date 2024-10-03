import { Injectable, Input ,EventEmitter} from '@angular/core';
import { Recommendation, RecommendationJSON } from '../domain/recommendation';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  @Input() filtro: string = "";
  filtroCambiado = new EventEmitter<string>(); // necesito emitir el cambio de criterio de busqueda
  constructor(private httpClient: HttpClient) { }

  async getRecommendations(): Promise<Recommendation[]> {
    const recommendations$ = this.httpClient.get<RecommendationJSON[]>(REST_SERVER_URL + '/recommendations')
    const recommendationsJSON = await lastValueFrom(recommendations$)
    return recommendationsJSON.map((recommendationJSON) => Recommendation.fromJson(recommendationJSON))
  }

  aplicarFiltro(filtro: string) {
    this.filtro = filtro;
    //filtro cambiado emite el cambio en filtro
    this.filtroCambiado.emit(this.filtro);
  }
  async getRecommendationById(id:number):Promise<Recommendation> {
    const recommendation$ = this.httpClient.get<RecommendationJSON>(REST_SERVER_URL + '/recommendations/'+id)
    const recommendationJSON = await lastValueFrom(recommendation$)
    return Recommendation.fromJson(recommendationJSON)
  }

  async actualizarRecomendacion(recomendacion: Recommendation){
    await lastValueFrom(this.httpClient.put<RecommendationJSON>(
      REST_SERVER_URL + `/recommendations/${recomendacion.id}`,
      recomendacion.toJSON
    ))
     
  }

} 

