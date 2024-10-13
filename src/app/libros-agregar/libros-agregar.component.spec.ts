import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAgregarComponent } from './libros-agregar.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('LibrosAgregarComponent', () => {
  let component: LibrosAgregarComponent;
  let fixture: ComponentFixture<LibrosAgregarComponent>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosAgregarComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteSpy},
        {provide: HttpClient, useValue: httpClientSpy}
      ]
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
