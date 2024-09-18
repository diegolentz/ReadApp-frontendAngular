import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBooksReadedComponent } from './profile-books-readed.component';

describe('ProfileBooksReadedComponent', () => {
  let component: ProfileBooksReadedComponent;
  let fixture: ComponentFixture<ProfileBooksReadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBooksReadedComponent]
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
