import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAgregarComponent } from './libros-agregar.component';

describe('LibrosAgregarComponent', () => {
  let component: LibrosAgregarComponent;
  let fixture: ComponentFixture<LibrosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
