import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPerfilComponent } from './panel-perfil.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

describe('PanelPerfilComponent', () => {
  let component: PanelPerfilComponent;
  let fixture: ComponentFixture<PanelPerfilComponent>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PanelPerfilComponent,
      ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
