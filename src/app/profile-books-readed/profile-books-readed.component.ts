import { Component, HostBinding } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';


@Component({
  selector: 'app-profile-books-readed',
  standalone: true,
  imports: [LibroComponent],
  templateUrl: './profile-books-readed.component.html',
  styleUrl: './profile-books-readed.component.css'
})
export class ProfileBooksReadedComponent {
  @HostBinding('style.width') width: string = '100%';

}
