import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css'],
  // providers: [BookService], //essential for service injection
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];
  constructor(public bookService: BookService) {
    // //use Dependency Injection in constructor instead
    // let bookService = new BookService();
    // this.books = bookService.getBooks();
  }
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }
}
