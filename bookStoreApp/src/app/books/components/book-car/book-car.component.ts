import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css'],
})
export class BookCarComponent {
  //expect books from parent
  //bookcar will share books-outlet to both all books and recents
  //in book-car outlet, books will be fetched from recents or allbooks by definition in html and logic in component file
  //here, alias used: parent should pass in allebooks property of allbook component not books property of book-car component
  @Input('alleBooks') books: BookModel[];
}
