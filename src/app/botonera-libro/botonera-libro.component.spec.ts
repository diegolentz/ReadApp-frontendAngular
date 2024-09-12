import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraLibroComponent } from './botonera-libro.component';

describe('BotoneraLibroComponent', () => {
  let component: BotoneraLibroComponent;
  let fixture: ComponentFixture<BotoneraLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoneraLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneraLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
