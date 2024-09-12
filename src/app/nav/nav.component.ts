import { Component } from '@angular/core';
import { CheckNavComponent } from '../check-nav/check-nav.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CheckNavComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
