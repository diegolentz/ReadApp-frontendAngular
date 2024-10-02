import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPerfilComponent } from './mi-perfil.component';
import { ActivatedRoute } from '@angular/router';

describe('MiPerfilComponent', () => {
  let component: MiPerfilComponent;
  let fixture: ComponentFixture<MiPerfilComponent>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiPerfilComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
