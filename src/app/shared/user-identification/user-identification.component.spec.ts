import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdentificationComponent } from './user-identification.component';
import { User } from '../../../domain/user';

describe('MinimumUserIdentificationComponent', () => {
  let component: UserIdentificationComponent;
  let fixture: ComponentFixture<UserIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserIdentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIdentificationComponent);
    component = fixture.componentInstance;
    component.user = new User()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
