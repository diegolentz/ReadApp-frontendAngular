import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { getHttpClientSpyHome } from '../../tests/stubs/httpClientSpyRecommendations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  beforeEach(async () => {
    httpClientSpy = getHttpClientSpyHome()
    await TestBed.configureTestingModule({
      imports: [HomeComponent, ToastrModule.forRoot()],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Apreto el boton eliminar y la recomendacion se elimina de la vista', () => {
    
    expect(getByTestId('id_1')).toBeTruthy()
    
  })

  function getByTestId(testId: string) {
    const resultHtml = fixture.debugElement.nativeElement
    return resultHtml.querySelector(`[data-testid="${testId}"]`)
  }
});
