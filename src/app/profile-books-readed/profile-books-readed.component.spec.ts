import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBooksReadedComponent } from './profile-books-readed.component';
import { HttpClient } from '@angular/common/http';

describe('ProfileBooksReadedComponent', () => {
  let component: ProfileBooksReadedComponent;
  let fixture: ComponentFixture<ProfileBooksReadedComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBooksReadedComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
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
