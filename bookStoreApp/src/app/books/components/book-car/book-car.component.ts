import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css'],
})
export class BookCarComponent {
  //@Input('alleBooks') books: BookModel[];
  private _books: BookModel[];
  @Input('alleBooks')
  get books(): BookModel[] {
    return this._books;
  }
  set books(books: BookModel[]) {
    books.map((x) => {
      x.title = 'titt pa.. ' + x.title;
      x.author = 'skribent ' + x.author;
    });
    this._books = books;
  }
}
