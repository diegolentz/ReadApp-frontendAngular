import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecommendationComponent } from './view-recommendation.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ViewRecommendationComponent', () => {
  let component: ViewRecommendationComponent;
  let fixture: ComponentFixture<ViewRecommendationComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ViewRecommendationComponent
      ],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
