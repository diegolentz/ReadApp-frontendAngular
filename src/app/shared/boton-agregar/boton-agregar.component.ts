import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../service/book.service';

@Component({
  selector: 'app-boton-agregar',
  standalone: true,
  imports: [],
  templateUrl: './boton-agregar.component.html',
  styleUrl: './boton-agregar.component.css'
})
export class BotonAgregarComponent {

  constructor(private route: ActivatedRoute, private router: Router, public bookService: BookService) { }
  @Input() tipo: string = '';
  agregarLibros() {
    // Redirige y renderiza lo que se manda por params
    this.router.navigate(["add-books", this.tipo], { relativeTo: this.route });
  }
}
