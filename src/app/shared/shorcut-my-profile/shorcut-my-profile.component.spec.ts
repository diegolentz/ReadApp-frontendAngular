import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorcutMyProfileComponent } from './shorcut-my-profile.component';
import { User } from '../../../domain/user';

describe('ShorcutMyProfileComponent', () => {
  let component: ShorcutMyProfileComponent;
  let fixture: ComponentFixture<ShorcutMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShorcutMyProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShorcutMyProfileComponent);
    component = fixture.componentInstance;
    /* component.user = new User() */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
