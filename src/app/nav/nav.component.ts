import { Component, Input } from '@angular/core';
import { CheckNavComponent } from '../check-nav/check-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CheckNavComponent, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'] 
})
export class NavComponent {
  @Input() filtro: string = ""; 

  constructor(private route: Router, public bookService : BookService) {}

  estoyLibros(): boolean {
    return this.route.url === '/search-books';
  }

  enviarFiltro(){
    this.bookService.aplicarFiltro(this.filtro)
  }
}
