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

  beforeEach(async () => {
    recommendationServiceMock = jasmine.createSpyObj('RecommendationService', ['getRecommendationById']);
    bookServiceMock = jasmine.createSpyObj('BookService', ['obtenerLibrosPorEstado']);
    toastServiceMock = jasmine.createSpyObj('ToastService', ['showToast']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
  });

  const setupTestBed = (isCreateMode: boolean) => {
    return TestBed.configureTestingModule({
      imports: [ViewRecommendationComponent], // Importamos el componente directamente
      providers: [
        { provide: RecommendationService, useValue: recommendationServiceMock },
        { provide: BookService, useValue: bookServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
        { provide: Router, useValue: routerMock },
        { 
          provide: ActivatedRoute, 
          useValue: { 
            params: of({ id: isCreateMode ? null : 1 }),
            snapshot: { 
              url: [{ path: 'view' }, { path: isCreateMode ? 'crear' : 'edit' }] 
            } 
          } 
        },
      ]
    }).compileComponents();
  };

  it('Deberia crear el componente e inicializar las propiedades en modo editar', async () => {
    await setupTestBed(false); // Modo editar

    fixture = TestBed.createComponent(ViewRecommendationComponent);
    component = fixture.componentInstance;

    recommendationServiceMock.getRecommendationById.and.returnValue(Promise.resolve(new Recommendation(
      'Test Author',
      [],
      'Test Title',
      'Test Description',
      true,
      [],
      0,
      1,
      true
    )));

    await component.ngOnInit();

    expect(component).toBeTruthy();
    expect(component.recomendacion.title).toBe('Test Title');
    expect(component.recomendacion.description).toBe('Test Description');
    expect(component.puedeCrear).toBeFalse();
    expect(component.puedeEditar).toBeTrue();
  });

  it('Deberia crear el componente en modo crear', async () => {
    await setupTestBed(true); // Modo crear

    fixture = TestBed.createComponent(ViewRecommendationComponent);
    component = fixture.componentInstance;

    await component.ngOnInit();

    expect(component).toBeTruthy();
    expect(component.puedeCrear).toBeTrue(); // Debe ser true en modo crear
    expect(component.recomendacion).toBeTruthy(); // La recomendación debe estar inicializada
  });
});
