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
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }
}
