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
      x.title = x.title;
      x.author = x.author;
      x.price = x.price;
      x.isPublished = x.isPublished;
      x.publishedOn = x.publishedOn
    });
    this._books = books;
  }
}
