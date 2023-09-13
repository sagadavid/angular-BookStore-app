import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../../shared/services/book.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css'],
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];
  constructor(
    public bookService: BookService,
    public countr2Service: Counter2Service
  ) {}

  public increase(): void {
    this.countr2Service.incCount();
  }
  public decrease(): void {
    this.countr2Service.decCount();
  }

  ngOnInit(): void {
    //to be able to dynamically work on it, hardcoded data should fit in BookModel -Class-.. so that we can use getter setter on it.

    const allBooks = this.bookService.getBooks();
    allBooks.forEach((b) => {
      var bokModel = new BookModel();
      bokModel.id = b.id;
      bokModel.skribent = b.author;
      bokModel.title = b.title;
      bokModel.totalPages = b.totalPages;
      bokModel.price = b.price;
      this.books.push(bokModel);
    });
    this.pagetitle = 'ALL WE HAVE IN THE STORE : ';
  }

  //getter setter in component
  private _pagetitle: string;

  public set pagetitle(pagetitle: string) {
    this._pagetitle = pagetitle;
  }
  public get pagetitle() {
    return this._pagetitle;
  }
}
