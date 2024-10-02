import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClient } from '@angular/common/http';

describe('BookService', () => {
  let service: BookService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule(
      { providers: [
          {provide: HttpClient, useValue:httpClientSpy}
        ] 
      }
    );
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
