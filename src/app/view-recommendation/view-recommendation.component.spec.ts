import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Recommendation } from "../../domain/recommendation";
import { RecommendationService } from "../../service/recommendation.service";
import { BookService } from "../../service/book.service";
import { ToastService } from "../../service/toast.service";
import { ViewRecommendationComponent } from "./view-recommendation.component";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";

describe('ViewRecommendationComponent', () => {
  let component: ViewRecommendationComponent;
  let fixture: ComponentFixture<ViewRecommendationComponent>;
  let recommendationServiceMock: jasmine.SpyObj<RecommendationService>;
  let bookServiceMock: jasmine.SpyObj<BookService>;
  let toastServiceMock: jasmine.SpyObj<ToastService>;
  let routerMock: jasmine.SpyObj<Router>;
  let activatedRouteMock: any;

  beforeEach(async () => {
    recommendationServiceMock = jasmine.createSpyObj('RecommendationService', ['getRecommendationById']);
    bookServiceMock = jasmine.createSpyObj('BookService', ['obtenerLibrosPorEstado']);
    toastServiceMock = jasmine.createSpyObj('ToastService', ['showToast']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    activatedRouteMock = {
      params: of({ id: 1 }),
      snapshot: {
        url: [
          { path: 'view' },  // O lo que sea necesario antes
          { path: 'edit' }   // Asegúrate de que esto sea 'edit'
        ]
      }
    };

    await TestBed.configureTestingModule({
      imports: [ViewRecommendationComponent], // Asegúrate de que sea correcto
      providers: [
        { provide: RecommendationService, useValue: recommendationServiceMock },
        { provide: BookService, useValue: bookServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRecommendationComponent);
    component = fixture.componentInstance;
  });

  it('Deberia crear el componente e inicializar las propiedades', async () => {
    recommendationServiceMock.getRecommendationById.and.returnValue(Promise.resolve(new Recommendation(
      'Test Author',
      [], // Libros recomendados
      'Test Title',
      'Test Description',
      true, // _public
      [], // valoraciones
      0, // valoracionTotal
      1, // id
      true // puedeValorar
    )));

    await component.ngOnInit();

    expect(component).toBeTruthy();
    expect(component.recomendacion.title).toBe('Test Title');
    expect(component.recomendacion.description).toBe('Test Description');
    expect(component.puedeCrear).toBeFalse(); // Asegúrate de que esto sea correcto
    expect(component.puedeEditar).toBeTrue(); // Cambia esto si tu lógica es diferente
  });
});
