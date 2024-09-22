import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FRIENDS } from '../mock/mockfriend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private httpClient: HttpClient) { }

  mockGetRecommendations() {
    return FRIENDS
  }

  // ESTO ESTA TAL CUAL EL VIDEO DE DODINO
  // async getRecommendations(): Promise<Recommendation[]> {
  //   const recommendations$ = this.httpClient.get<RecommendationJSON[]>(REST_SERVER_URL + '/recommendations')
  //   const recommendationsJSON = await lastValueFrom(recommendations$)
  //   return recommendationsJSON.map((recommendationJSON) => Recommendation.fromJson(recommendationJSON))
  // }
}
