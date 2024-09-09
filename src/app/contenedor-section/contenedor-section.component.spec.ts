import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSectionComponent } from './contenedor-section.component';

describe('ContenedorSectionComponent', () => {
  let component: ContenedorSectionComponent;
  let fixture: ComponentFixture<ContenedorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
