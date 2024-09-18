import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-resena',
  standalone: true,
  imports: [],
  templateUrl: './resena.component.html',
  styleUrl: './resena.component.css'
})
export class ResenaComponent {
  @HostBinding('style.width') width: string = '100%';
}
