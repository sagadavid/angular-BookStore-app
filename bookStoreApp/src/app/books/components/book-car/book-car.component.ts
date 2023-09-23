import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css'],
})
export class BookCarComponent {
  private _books: BookModel[];
  //@Input('alleBooks') books: BookModel[];
  @Input('alleBooks')
  get books(): BookModel[] {
    return this._books;
  }
  set books(books: BookModel[]) {
    books.map((x) => {
      x.title = 'have a look....' + x.title;
      x.skribent = 'Nobel winner ' + x.skribent;
    });
    this._books = books;
  }
}
