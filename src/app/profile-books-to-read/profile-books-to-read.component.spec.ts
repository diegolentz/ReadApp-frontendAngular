import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBooksToReadComponent } from './profile-books-to-read.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ProfileBooksToReadComponent', () => {
  let component: ProfileBooksToReadComponent;
  let fixture: ComponentFixture<ProfileBooksToReadComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBooksToReadComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
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
