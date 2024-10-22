// import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< Updated upstream
// import { RecomendacionComponent } from './recomendacion.component';
// import { ActivatedRoute } from '@angular/router';
// import { Recommendation } from '../../../domain/recommendation';
=======
import { RecomendacionComponent } from './recomendacion.component';
import { ActivatedRoute } from '@angular/router';
import { Recommendation, RecommendationCard } from '../../../domain/recommendation';
>>>>>>> Stashed changes

// describe('RecomendacionComponent', () => {
//   let component: RecomendacionComponent;
//   let fixture: ComponentFixture<RecomendacionComponent>;
//   let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [RecomendacionComponent],
//       providers: [
//         { provide: ActivatedRoute, useValue: activatedRouteSpy }
//       ]
//     })
//       .compileComponents();

<<<<<<< Updated upstream
=======
    fixture = TestBed.createComponent(RecomendacionComponent);
    component = fixture.componentInstance;
    component.recomendacion = new RecommendationCard()
    fixture.detectChanges();
  });
>>>>>>> Stashed changes

//     fixture = TestBed.createComponent(RecomendacionComponent);
//     component = fixture.componentInstance;
//     component.recomendacion = new Recommendation()
//     fixture.detectChanges();
//   });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
