import { Injectable } from '@angular/core';
import { BookModel } from '../../books/models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpKlient: HttpClient) {}

  public addBook(bookModel: BookModel) {
  }

  public getBooks(): void {

  }

}
