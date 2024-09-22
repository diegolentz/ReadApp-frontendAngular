import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOKS } from '../mock/mockBooks';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private httpClient: HttpClient) { }

  mockGetBooks() {
    return BOOKS
  }

  // ESTO ESTA TAL CUAL EL VIDEO DE DODINO
  //FALTA ACOMODARLO A LIBRO, ESTA PARA RECOMENDACION
  // async getRecommendations(): Promise<Recommendation[]> {
  //   const recommendations$ = this.httpClient.get<RecommendationJSON[]>(REST_SERVER_URL + '/recommendations')
  //   const recommendationsJSON = await lastValueFrom(recommendations$)
  //   return recommendationsJSON.map((recommendationJSON) => Recommendation.fromJson(recommendationJSON))
  // }
}
