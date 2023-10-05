import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { BookModel } from '../../models/book.model';
import { PriceModel } from '../../models/price.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  prices: any[] = [
    { value: 1, viewValue: '100' },
    { value: 2, viewValue: '200' },
    { value: 3, viewValue: '300' },
  ];
  public model42WayBinding: BookModel;

  //inject book service
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    //default values for template - two way binding
    this.model42WayBinding = new BookModel();
    this.model42WayBinding.title = 'Default title for the book';
    this.model42WayBinding.totalPages = 345;
    this.model42WayBinding.price = {
      value: 3,
      currency: 'USD',
    };
    this.model42WayBinding.isPublished = true;
  }

  saveBook(): void {
    // console.log('at savebook/addbook comp. ' + value.isPublished);
    // console.log('dat on addbok/saveBook()' + value.publishedOn);
    // //now add book is available in service, then use it
    // const book2save: BookModel = new BookModel();
    // book2save.id = value.id;
    // book2save.author = value.author;
    // book2save.title = value.title;
    // book2save.price = { currency: '$', value: value.price };
    // book2save.totalPages = value.pages;
    // book2save.isPublished = value.isPublished;
    // book2save.publishedOn = value.publishedOn;
    // this.bookService.addBook(book2save);
    console.log(this.model42WayBinding);
    this.bookService.addBook(this.model42WayBinding);
  }
}
