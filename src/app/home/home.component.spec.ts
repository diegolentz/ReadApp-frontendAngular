import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { getHttpClientSpyHome, recommendationCardStubJSON } from '../../tests/stubs/httpClientSpyRecommendations';
import { RecommendationService } from '../../service/recommendation.service';
import { RecommendationCard } from '../../domain/recommendation';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  // let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  let routerSpy: jasmine.SpyObj<Router>
  let service: jasmine.SpyObj<RecommendationService>
  const activatedRouteMock = {

    params: of({}), // No parameters in this case

    snapshot: {

      url: [{ path: 'home' }] // Set the URL to /home

    }

  };
  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'])
    httpClientSpy = getHttpClientSpyHome()
    await TestBed.configureTestingModule({
      imports: [HomeComponent, ToastrModule.forRoot()],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: RecommendationService, useValue: jasmine.createSpyObj('RecommendationService', ['getAllRecommendations']) }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RecommendationService) as jasmine.SpyObj<RecommendationService>;
    fixture.detectChanges();

    service.getAllRecommendations.and.returnValue(Promise.resolve(recommendationCardStubJSON.map(RecommendationCard.fromJson)));
    // expect(getByTestId('id_1')).toBeTruthy()
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });


  it('EL componente inicia con 2 recomendaciones', async () => {
    await component.ngOnInit();
    expect(component.recommendations).toEqual(recommendationCardStubJSON.map(RecommendationCard.fromJson));

    expect(component.recommendations.length).toBe(2)
  })

  // it('La recomendacion 1 existe', async () => {
  //   await component.ngOnInit();
  //   expect(component.recommendations).toEqual(recommendationCardStubJSON.map(RecommendationCard.fromJson))

  //   expect(fixture.debugElement.nativeElement.querySelector('[data-testid="id_1"]')).toBeTruthy()
  // })

  function getByTestId(testId: string) {
    const resultHtml = fixture.debugElement.nativeElement
    return resultHtml.querySelector(`[data-testid="${testId}"]`)
  }
});
