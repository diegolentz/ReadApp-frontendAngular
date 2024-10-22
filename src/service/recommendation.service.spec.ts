import { TestBed } from '@angular/core/testing';
import { RecommendationService } from './recommendation.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { Recommendation, RecommendationJSON } from '../domain/recommendation';
import { REST_SERVER_URL } from './configuration';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ValorationJSON } from '../domain/valoration';
import { Valoration } from '../domain/valoration';

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
  const mockValoration: ValorationJSON = {
    author: 'Test User',
    fotoPath: 'path/to/photo.jpg',
    score: 5,
    fecha: '2024-10-21',
    comentario: 'Great recommendation!',
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

  it('debería agregar una valoración', async () => {
    const idRecommendation = 1;
    const valoration = new Valoration(
      mockValoration.author,
      mockValoration.fotoPath,
      mockValoration.score,
      new Date(mockValoration.fecha),
      mockValoration.comentario
    );

    httpClientSpy.put.and.returnValue(of(mockValoration));

    const result = await service.agregarValoracion(valoration, idRecommendation);
    
    expect(result).toEqual(mockValoration);
    expect(httpClientSpy.put).toHaveBeenCalledWith(
      `${REST_SERVER_URL}/recommendations/${idRecommendation}`,
      valoration.toJSON()
    );
    expect(toastSpy.success).toHaveBeenCalledWith("Se agregó correctamente la valoración");
  });

  it('debería manejar errores al agregar una valoración', async () => {
    const errorResponse = new HttpErrorResponse({
      error: { message: 'Error de prueba' },
      status: 400,
    });

    const idRecommendation = 1;
    const valoration = new Valoration(
      mockValoration.author,
      mockValoration.fotoPath,
      mockValoration.score,
      new Date(mockValoration.fecha),
      mockValoration.comentario
    );

    httpClientSpy.put.and.returnValue(throwError(() => errorResponse));

    await service.agregarValoracion(valoration, idRecommendation);

    expect(toastSpy.warning).toHaveBeenCalledWith('Error de prueba');
  });
});
