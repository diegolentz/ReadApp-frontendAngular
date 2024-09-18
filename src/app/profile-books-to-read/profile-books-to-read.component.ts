import { Component,HostBinding } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';

@Component({
  selector: 'app-profile-books-to-read',
  standalone: true,
  imports: [LibroComponent],
  templateUrl: './profile-books-to-read.component.html',
  styleUrl: './profile-books-to-read.component.css'
})
export class ProfileBooksToReadComponent {
  @HostBinding('style.width') width: string = '100%';
}
