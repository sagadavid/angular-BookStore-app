import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { BookModel } from '../../models/book.model';
import { PriceModel } from '../../models/price.model';
import { NgForm } from '@angular/forms';

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
  @ViewChild('myNgForm') myForm: NgForm;

  //inject book service
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    //default values for template - two way binding
    this.model42WayBinding = new BookModel();
    // this.model42WayBinding.title = 'Default title for the book';
    this.model42WayBinding.totalPages = 345;
    this.model42WayBinding.price = {
      value: 3,
      currency: 'USD',
    };
    this.model42WayBinding.isPublished = true;
  }

  saveBook(): void {
    //dont rely on frontend validation.. check really valid to save "a filled form"
    if (this.myForm.valid) {
      console.log(this.model42WayBinding);
      this.bookService.addBook(this.model42WayBinding);
      alert('book saved, required fields are filled and form is valid');
    } else {
      alert('please to complete required fields to save the book');
    }
  }
}
