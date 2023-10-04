import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  public model42WayBinding: BookModel;

  //inject book service
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    //default values for template - two way binding
    this.model42WayBinding = new BookModel();
    this.model42WayBinding.title = 'Default title for the book';
    this.model42WayBinding.totalPages = 345;
  }

  saveBook(value: any): void {
    console.log('at savebook/addbook comp. ' + value.isPublished);
    console.log('dat on addbok/saveBook()' + value.publishedOn);
    //now add book is available in service, then use it
    const book2save: BookModel = new BookModel();
    book2save.id = value.id;
    book2save.author = value.author;
    book2save.title = value.title;
    book2save.price = { currency: '$', value: value.price };
    book2save.totalPages = value.pages;
    book2save.isPublished = value.isPublished;
    book2save.publishedOn = value.publishedOn;

    this.bookService.addBook(book2save);
  }
}
