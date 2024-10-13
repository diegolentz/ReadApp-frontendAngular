import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraLibroComponent } from './botonera-libro.component';
import { HttpClient } from '@angular/common/http';

describe('BotoneraLibroComponent', () => {
  let component: BotoneraLibroComponent;
  let fixture: ComponentFixture<BotoneraLibroComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoneraLibroComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]
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
