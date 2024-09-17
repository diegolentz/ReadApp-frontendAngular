import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionSeleccionadaComponent } from './opcion-seleccionada.component';

describe('OpcionSeleccionadaComponent', () => {
  let component: OpcionSeleccionadaComponent;
  let fixture: ComponentFixture<OpcionSeleccionadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionSeleccionadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionSeleccionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
