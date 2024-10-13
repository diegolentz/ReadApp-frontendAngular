import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosComponent } from './amigos.component';
import { User } from '../../domain/user';

describe('AmigosComponent', () => {
  let component: AmigosComponent;
  let fixture: ComponentFixture<AmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmigosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmigosComponent);
    component = fixture.componentInstance;
    /* component.userFriend = new User() */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
