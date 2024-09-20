import { Component } from '@angular/core';
import { ProfileBooksReadedComponent } from "../profile-books-readed/profile-books-readed.component";
import { BooksComponent } from "../shared/layouts/books/books.component";
import { ProfileBooksToReadComponent } from "../profile-books-to-read/profile-books-to-read.component";

@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [ProfileBooksReadedComponent, BooksComponent, ProfileBooksToReadComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrl: './view-recommendation.component.css'
})
export class ViewRecommendationComponent {
}
