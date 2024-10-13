import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBooksReadedComponent } from './profile-books-readed.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ProfileBooksReadedComponent', () => {
  let component: ProfileBooksReadedComponent;
  let fixture: ComponentFixture<ProfileBooksReadedComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBooksReadedComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBooksReadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
