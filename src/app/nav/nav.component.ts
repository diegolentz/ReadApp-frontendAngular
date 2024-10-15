import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckNavComponent } from '../check-nav/check-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { RecommendationService } from '../../service/recommendation.service';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CheckNavComponent, CommonModule, FormsModule, InputComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() newFilterEvent = new EventEmitter<string>();

  addFiltro(value: string) {
    this.newFilterEvent.emit(value);
  }

  constructor(private route: Router) { }

  estoyLibros(): boolean {
    return this.route.url === '/search-books';
  }

}
