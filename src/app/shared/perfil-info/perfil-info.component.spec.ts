import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInfoComponent } from './perfil-info.component';
import { HttpClient } from '@angular/common/http';

describe('PerfilInfoComponent', () => {
  let component: PerfilInfoComponent;
  let fixture: ComponentFixture<PerfilInfoComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilInfoComponent],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
