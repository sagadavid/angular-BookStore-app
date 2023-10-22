import { Injectable } from '@angular/core';
import { BookModel } from '../../books/models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpKlient: HttpClient) {}

  public addBook(bookModel: BookModel) {
  }

  public getBooks(): Observable <BookModel[]> {
   return this.httpKlient.get<BookModel[]>('https://localhost:7091/api/Books');
  }

}
