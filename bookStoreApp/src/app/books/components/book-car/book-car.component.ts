import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css'],
})
export class BookCarComponent {
  //expect books from parent
  //bookcar will share books schema to both all books and recents
  //in book-car outlet, books will be called from recents or allbooks by definition in html

  @Input() books: BookModel[];
}
