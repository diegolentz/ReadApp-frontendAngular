import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorcutMyProfileComponent } from './shorcut-my-profile.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
