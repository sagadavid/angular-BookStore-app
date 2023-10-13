import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/shared/services/book.service';

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

  constructor(private bookService:BookService) {}

  private initForm() {
       this.addBookForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    totalPages: new FormControl(),
    price: new FormControl(),
    publishedOn: new FormControl(),
    isPublished: new FormControl(),
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();
  }

  saveBook(): void {
    if (this.addBookForm.valid) {
      console.log(this.addBookForm.value);
      this.bookService.addBook(this.addBookForm.value);
      alert('book saved, required fields are filled and form is valid');
    } else {
      alert('please to complete required fields to save the book');
    }
  }
}
