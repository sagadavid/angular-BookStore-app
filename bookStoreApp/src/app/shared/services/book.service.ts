import { Injectable } from '@angular/core';
import { BookModel } from '../../books/models/book.model';

@Injectable({
  providedIn: 'root', //by this, already available across application level
})
export class BookService {
  constructor() {}
  //books list is a property now
  private allBooks = [
    {
      id: 1,
      title: 'Dune',
      totalPages: 600,
      author: 'Herberth',
      price: {
        currency: 'Euro',
        value: 50,
      },
    },
    {
      id: 2,
      title: 'Lord of the Rings',
      totalPages: 800,
      author: 'Tolkien',
      price: {
        currency: 'Nok',
        value: 1200,
      },
    },
    {
      id: 3,
      title: 'Stay Behind',
      totalPages: 400,
      author: 'Hargaard',
      price: {
        currency: 'Nok',
        value: 1000,
      },
    },
  ];

  public addBook(bookModel: BookModel) {
    this.allBooks.push(bookModel);
  }

  public getBooks(): any[] {
    //add book funcs as a list push method
    return this.allBooks;
  }

  public getRecentBooks(): any[] {
    return [
      {
        id: 2,
        title: 'Lord of the Rings',
        totalPages: 800,
        author: 'Tolkien',
        price: {
          currency: 'Nok',
          value: 1200,
        },
      },
      {
        id: 3,
        title: 'Stay Behind',
        totalPages: 400,
        author: 'Hargaard',
        price: {
          currency: 'Nok',
          value: 1000,
        },
      },
    ];
  }
}
