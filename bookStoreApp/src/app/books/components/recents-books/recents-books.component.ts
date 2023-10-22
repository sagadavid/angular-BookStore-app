import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recents-books',
  templateUrl: './recents-books.component.html',
  styleUrls: ['./recents-books.component.css'],
})
export class RecentsBooksComponent implements OnInit {
  public recents: BookModel[];

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this.getRecentBooks();
  }
  private getRecentBooks(): void {
    //this.recents = this._bookService.getRecentBooks();
  }
}
