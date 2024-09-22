import { Injectable } from '@angular/core';
import { Recommendation, RecommendationJSON } from '../domain/recommendation';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';
import { RECOMMENDATIONS } from '../mock/mockRecommendations';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  constructor(private httpClient: HttpClient) { }

  mockGetRecommendations() {
    return RECOMMENDATIONS
  }

  // ESTO ESTA TAL CUAL EL VIDEO DE DODINO
  async getRecommendations(): Promise<Recommendation[]> {
    const recommendations$ = this.httpClient.get<RecommendationJSON[]>(REST_SERVER_URL + '/recommendations')
    const recommendationsJSON = await lastValueFrom(recommendations$)
    return recommendationsJSON.map((recommendationJSON) => Recommendation.fromJson(recommendationJSON))
  }

}

