import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRecommendationComponent } from './view-recommendation.component';
import { RecommendationService } from '../../service/recommendation.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { of } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Recommendation } from '../../domain/recommendation';
import { Book, BookJSON } from '../../domain/book';
import { HttpClientModule } from '@angular/common/http';

describe('ViewRecommendationComponent', () => {
  let component: ViewRecommendationComponent;
  let fixture: ComponentFixture<ViewRecommendationComponent>;
  let recommendationServiceSpy: jasmine.SpyObj<RecommendationService>;
  let bookServiceSpy: jasmine.SpyObj<BookService>;
  let toastrSpy: jasmine.SpyObj<ToastrService>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockRecommendation: Recommendation = new Recommendation(
    'Test Author',
    [],
    'Test Recommendation',
    'Esto es una descripcion test',
    true,
    [],
    0,
    1
  );

  const mockBookJSON: BookJSON = {
    id: 1,
    titulo: 'Test Book',
    autor: 'Test Author',
    cantidadPalabras: 50000,
    cantidadPaginas: 300,
    traducciones: ['English', 'Spanish'],
    ventasSemanales: 1000,
    imagen: 'path/to/image.jpg'
  };

  const mockBook: Book = Book.fromJson(mockBookJSON);

  beforeEach(async () => {
    const recommendationSpy = jasmine.createSpyObj('RecommendationService', ['getRecommendationById', 'actualizarRecomendacion']);
    const bookSpy = jasmine.createSpyObj('BookService', ['obtenerLibrosPorEstado']);
    const toastSpy = jasmine.createSpyObj('ToastrService', ['success', 'warning']);
    const routerSpyMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        ViewRecommendationComponent
      ],
      providers: [
        { provide: RecommendationService, useValue: recommendationSpy },
        { provide: BookService, useValue: bookSpy },
        { provide: ToastrService, useValue: toastSpy },
        { provide: Router, useValue: routerSpyMock },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            snapshot: {
              url: [new UrlSegment('edit', {}), new UrlSegment('detalle', {})],
              params: { id: 1 }
            }
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRecommendationComponent);
    component = fixture.componentInstance;

    recommendationServiceSpy = TestBed.inject(RecommendationService) as jasmine.SpyObj<RecommendationService>;
    bookServiceSpy = TestBed.inject(BookService) as jasmine.SpyObj<BookService>;
    toastrSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    recommendationServiceSpy.getRecommendationById.and.returnValue(Promise.resolve(mockRecommendation));
    bookServiceSpy.obtenerLibrosPorEstado.and.returnValue(Promise.resolve([mockBook]));
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar la reseña correctamente', async () => {
    await component.ngOnInit();
    expect(component.recomendacion.description).toBe('Esto es una descripcion test');
    fixture.detectChanges();
    const descriptionElement: HTMLElement = fixture.nativeElement.querySelector('.descripcion');
    expect(descriptionElement.textContent).toContain('Esto es una descripcion test');
  });

  it('debería marcar la página como editable cuando la ruta es de edición', () => {
    const activatedRoute = TestBed.inject(ActivatedRoute);
    activatedRoute.snapshot.url = [new UrlSegment('detalle', {}), new UrlSegment('edit', {})];

    component.esEditable();

    expect(component.puedeEditar).toBeTrue();
  });
});
