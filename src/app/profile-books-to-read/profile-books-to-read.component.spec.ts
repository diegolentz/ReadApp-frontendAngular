import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBooksToReadComponent } from './profile-books-to-read.component';

describe('ProfileBooksToReadComponent', () => {
  let component: ProfileBooksToReadComponent;
  let fixture: ComponentFixture<ProfileBooksToReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBooksToReadComponent]
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
