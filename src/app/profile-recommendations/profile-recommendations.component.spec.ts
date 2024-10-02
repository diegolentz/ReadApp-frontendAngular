import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecommendationsComponent } from './profile-recommendations.component';
import { HttpClient } from '@angular/common/http';

describe('ProfileRecommendationsComponent', () => {
  let component: ProfileRecommendationsComponent;
  let fixture: ComponentFixture<ProfileRecommendationsComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRecommendationsComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
