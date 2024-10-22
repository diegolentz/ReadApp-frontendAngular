import { Injectable, Input, EventEmitter } from '@angular/core';
import { Recommendation, RecommendationCard, RecommendationCardJSON, RecommendationJSON } from '../domain/recommendation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import { lastValueFrom } from 'rxjs';
import { Valoration, ValorationJSON } from '../domain/valoration';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  @Input() filtro: string = "";
  filtroCambiado = new EventEmitter<string>(); // necesito emitir el cambio de criterio de busqueda
  constructor(private httpClient: HttpClient, private toast: ToastrService, private router: Router) { }

  async getRecommendations(): Promise<Recommendation[]> {
    const recommendations$ = this.httpClient.get<RecommendationJSON[]>(REST_SERVER_URL + '/recommendations')
    const recommendationsJSON = await lastValueFrom(recommendations$)
    return recommendationsJSON.map((recommendationJSON) => Recommendation.fromJson(recommendationJSON))
  }

  async getRecommendationsFilter(filtro: string): Promise<Recommendation[]> {
    const recommendations$ = this.httpClient.get<RecommendationJSON[]>(REST_SERVER_URL + '/recommendations/filter', {
      params: { filtro: filtro }
    })
    const recommendationsJSON = await lastValueFrom(recommendations$)
    return recommendationsJSON.map((recommendationJSON) => Recommendation.fromJson(recommendationJSON))
  }

  async getRecommendationById(id: number): Promise<Recommendation> {
    try {
      const recommendation$ = this.httpClient.get<RecommendationJSON>(REST_SERVER_URL + '/recommendations/' + id)
      const recommendationJSON = await lastValueFrom(recommendation$)
      return Recommendation.fromJson(recommendationJSON)
    } catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        this.toast.warning(`${error.error['message']}`)
        this.router.navigate(['/home/home'])
      }
      return error
    }

  }

  async actualizarRecomendacion(recomendacion: Recommendation) {
    try {
      const recomendacionNueva = await lastValueFrom(this.httpClient.put<RecommendationJSON>(
        REST_SERVER_URL + `/recommendations`,
        recomendacion.toEditarJSON()
      ))
      this.toast.success('Recomendacion editada con exito')
      return recomendacionNueva   
    } catch(error:any){
      if(error instanceof HttpErrorResponse){
        this.toast.warning(`${error.error['message']}`)
        return error
      }
      return error
    }
  }

  // si es true = home, si es false = private
  async getUserRecommendations(estado: boolean): Promise<RecommendationCard[]> {
    const recommendations$ = this.httpClient.get<RecommendationCardJSON[]>(REST_SERVER_URL + '/recommendationsLoggedUser', {
      params: { privada: estado }
    });
    const recommendationsJSON = await lastValueFrom(recommendations$);
    return recommendationsJSON.map((recommendationJSON) => RecommendationCard.fromJson(recommendationJSON));
  }
  async getAllRecommendations(): Promise<RecommendationCard[]> {
    const recommendations$ = this.httpClient.get<RecommendationCardJSON[]>(REST_SERVER_URL + '/recommendations');
    const recommendationsJSON = await lastValueFrom(recommendations$);
    return recommendationsJSON.map((recommendationJSON) => RecommendationCard.fromJson(recommendationJSON));
  }
  async agregarValoracion(valoracion: Valoration, idRecommendation: number) {
    try {
      const valoracionNueva = await lastValueFrom(this.httpClient.put<ValorationJSON>(
        REST_SERVER_URL + `/recommendations/${idRecommendation}`,
        valoracion.toJSON()
      ))
      this.toast.success("Se agregó correctamente la valoración");
      return valoracionNueva
    } catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        this.toast.warning(`${error.error['message']}`)
        return error
      }
      this.toast.error(`error externo`)
      return error
    }
  }

  
}

