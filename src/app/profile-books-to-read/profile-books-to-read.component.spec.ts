import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBooksToReadComponent } from './profile-books-to-read.component';
import { HttpClient } from '@angular/common/http';

describe('ProfileBooksToReadComponent', () => {
  let component: ProfileBooksToReadComponent;
  let fixture: ComponentFixture<ProfileBooksToReadComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBooksToReadComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBooksToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
