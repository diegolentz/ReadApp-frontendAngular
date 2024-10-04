import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../service/book.service';

@Component({
  selector: 'app-boton-agregar',
  standalone: true,
  imports: [],
  templateUrl: './boton-agregar.component.html',
  styleUrl: './boton-agregar.component.css'
})
export class BotonAgregarComponent {
  @Input() tipoContenido: string = ''; // recibo el tipo de contenido a renderizar

  constructor(private route: Router, public bookService: BookService) { }

  agregarLibros() {
    // redirijo y renderiza lo que mando por params
    this.bookService.render(this.tipoContenido)
    this.route.navigate(['/add-Books']);
  }
}
