import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  public getBooks(): BookModel[] {
    return [
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
  }
}
