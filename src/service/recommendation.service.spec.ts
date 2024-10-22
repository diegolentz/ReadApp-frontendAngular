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
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put']);
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

    httpClientSpy.get.and.returnValue(throwError(() => errorResponse));

    await service.getRecommendationById(1);
    expect(toastSpy.warning).toHaveBeenCalledWith('Error de prueba');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home/home']);
  });

  it('debería actualizar una recomendación', async () => {
    const updatedRecommendation = new Recommendation(
      'Test Author',
      [],
      'Updated Recommendation',
      'Updated Description',
      true,
      [],
      0,
      1
    );

    httpClientSpy.put.and.returnValue(of(mockRecommendation));

    const result = await service.actualizarRecomendacion(updatedRecommendation);
    
    expect(result).toEqual(mockRecommendation);
    expect(httpClientSpy.put).toHaveBeenCalledWith(
      `${REST_SERVER_URL}/recommendations`,
      updatedRecommendation.toEditarJSON()
    );
    expect(toastSpy.success).toHaveBeenCalledWith('Recomendacion editada con exito');
  });

  it('debería manejar errores al actualizar una recomendación', async () => {
    const errorResponse = new HttpErrorResponse({
      error: { message: 'Error de prueba' },
      status: 400,
    });

    const updatedRecommendation = new Recommendation(
      'Test Author',
      [],
      'Updated Recommendation',
      'Updated Description',
      true,
      [],
      0,
      1
    );

    httpClientSpy.put.and.returnValue(throwError(() => errorResponse));

    await service.actualizarRecomendacion(updatedRecommendation);

    expect(toastSpy.warning).toHaveBeenCalledWith('Error de prueba');
  });
});
