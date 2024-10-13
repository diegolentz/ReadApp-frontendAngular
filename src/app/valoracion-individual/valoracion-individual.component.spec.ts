import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionIndividualComponent } from './valoracion-individual.component';
import { Valoration } from '../../domain/valoration';

describe('ValoracionIndividualComponent', () => {
  let component: ValoracionIndividualComponent;
  let fixture: ComponentFixture<ValoracionIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoracionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
