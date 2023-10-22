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

  ngOnInit(): void {
    this.pagetitle='All the books on the market'
    this.getAllBooks();

  }

  //getter setter in component
  private _pagetitle: string;

  public set pagetitle(pagetitle: string) {
    this._pagetitle = pagetitle;
  }
  public get pagetitle() {
    return this._pagetitle;
  }

    public increase(): void {
    this.countr2Service.incCount();
  }
  public decrease(): void {
    this.countr2Service.decCount();
  }

  private getAllBooks(): void {
    this.bookService.getBooks()
      .subscribe(subsBooks => {
        this.books = subsBooks;
      })
  }
}
