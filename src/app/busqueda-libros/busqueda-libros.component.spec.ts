import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaLibrosComponent } from './busqueda-libros.component';
import { HttpClient } from '@angular/common/http';

describe('BusquedaLibrosComponent', () => {
  let component: BusquedaLibrosComponent;
  let fixture: ComponentFixture<BusquedaLibrosComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaLibrosComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
