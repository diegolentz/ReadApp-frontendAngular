import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosAgregarComponent } from './amigos-agregar.component';

describe('AmigosAgregarComponent', () => {
  let component: AmigosAgregarComponent;
  let fixture: ComponentFixture<AmigosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmigosAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmigosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
