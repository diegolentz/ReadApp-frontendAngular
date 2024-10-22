import { TestBed } from '@angular/core/testing';
import { RecommendationService } from './recommendation.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { Recommendation, RecommendationJSON } from '../domain/recommendation';
import { REST_SERVER_URL } from './configuration';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

describe('RecommendationService', () => {
  let service: RecommendationService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let routerSpy: jasmine.SpyObj<Router>;
  let toastSpy: jasmine.SpyObj<ToastrService>;

  const mockRecommendation: RecommendationJSON = {
    creador: 'Test Author',
    librosRecomendados: [], // Puedes agregar libros si lo necesitas
    titulo: 'Test Recommendation',
    contenido: 'Test Description',
    publica: true,
    valoraciones: [], // Puedes agregar valoraciones si es necesario
    valoracionTotal: 0,
    id: 1,
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    toastSpy = jasmine.createSpyObj('ToastrService', ['warning', 'success']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule, ToastrModule.forRoot()],
      providers: [
        RecommendationService,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: toastSpy }
      ]
    });

    service = TestBed.inject(RecommendationService);
  });

  it('debería obtener una recomendación por ID', async () => {
    httpClientSpy.get.and.returnValue(of(mockRecommendation));

    const recommendation = await service.getRecommendationById(1);
    expect(recommendation).toEqual(Recommendation.fromJson(mockRecommendation));
    expect(httpClientSpy.get).toHaveBeenCalledWith(`${REST_SERVER_URL}/recommendations/1`);
  });

  it('debería manejar errores al obtener una recomendación por ID', async () => {
    const errorResponse = new HttpErrorResponse({
      error: { message: 'Error de prueba' },
      status: 404,
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    const recommendation = await service.getRecommendationById(1);
    // Aquí el valor de retorno no es el error, así que podemos manejarlo directamente.
    expect(toastSpy.warning).toHaveBeenCalledWith('Error de prueba');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home/home']);
  });
});
