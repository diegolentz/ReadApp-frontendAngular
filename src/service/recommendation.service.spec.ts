import { TestBed } from '@angular/core/testing';

import { RecommendationService } from './recommendation.service';
import { HttpClient } from '@angular/common/http';

describe('RecommendationService', () => {
  let service: RecommendationService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule(
        { providers: [
            {provide: HttpClient, useValue:httpClientSpy}
          ] 
        }
    );
    service = TestBed.inject(RecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
