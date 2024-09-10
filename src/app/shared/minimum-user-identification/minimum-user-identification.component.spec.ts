import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumUserIdentificationComponent } from './minimum-user-identification.component';

describe('MinimumUserIdentificationComponent', () => {
  let component: MinimumUserIdentificationComponent;
  let fixture: ComponentFixture<MinimumUserIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimumUserIdentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimumUserIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
