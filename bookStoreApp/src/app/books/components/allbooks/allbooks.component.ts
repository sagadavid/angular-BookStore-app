import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../../shared/services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css'],
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];
  constructor(
    public bookService: BookService,
    public countrService: CounterService
  ) {}

  public increase(): void {
    this.countrService.incCount();
  }
  public decrease(): void {
    this.countrService.decCount();
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }
}
