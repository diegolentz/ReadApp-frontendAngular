import { Component, Input } from '@angular/core';
import { BotoneraLibroComponent } from '../botonera-libro/botonera-libro.component';
import { Book } from '../../domain/book';
@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [BotoneraLibroComponent],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})

export class LibroComponent {
  @Input() book!:Book;
  
}
