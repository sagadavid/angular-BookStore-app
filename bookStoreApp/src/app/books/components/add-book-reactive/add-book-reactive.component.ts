import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent {
prices: any[] = [
    { value: 1, viewValue: '100' },
    { value: 2, viewValue: '200' },
    { value: 3, viewValue: '300' },
];
  public addBookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    pages: new FormControl(),
    price: new FormControl(),
    publishDate: new FormControl(),
    isPublished: new FormControl(),

  })
}
