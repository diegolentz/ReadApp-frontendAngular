import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecommendationComponent } from './view-recommendation.component';
import { RecommendationService } from '../../service/recommendation.service';
import { HttpClient } from '@angular/common/http';

describe('ViewRecommendationComponent', () => {
  let component: ViewRecommendationComponent;
  let fixture: ComponentFixture<ViewRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ViewRecommendationComponent,
        RecommendationService,
        HttpClient
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
