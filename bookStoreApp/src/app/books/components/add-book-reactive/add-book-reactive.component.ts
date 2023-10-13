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

  public addBookForm: FormGroup;

  constructor() {}

  private initForm() {
       this.addBookForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    pages: new FormControl(),
    price: new FormControl(),
    publishDate: new FormControl(),
    isPublished: new FormControl(),
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();
  }
}
