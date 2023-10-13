import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent {
prices: any[] = [
    { value: 100, viewValue: 'hundred' },
    { value: 200, viewValue: '2hundred' },
    { value: 300, viewValue: '3hundred' },
];

currencies: any[] = [
    { value: 'USD', viewValue: 'American Dollar' },
    { value: 'NOK', viewValue: 'Norwegian Kroner' },
    { value: 'EURO', viewValue: 'European Mark' },
];
  public addBookForm: FormGroup;

  constructor(private bookService:BookService) {}

  private initForm() {
    this.addBookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl('ferdinand von schirach', [Validators.required, Validators.minLength(3)]),
      totalPages: new FormControl(239),
      price: new FormGroup({
        currency: new FormControl(),
        value: new FormControl()
      }),
      publishedOn: new FormControl(),
      isPublished: new FormControl(),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();

    //get form control values/reference
    // console.log(this.addBookForm);
    // console.log(this.addBookForm.controls);
    // console.log(this.addBookForm.controls['title']);
    console.log(this.addBookForm.get('title'));
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
//in a scneario where data need to be updated.. fx after getting from api
  updateFormValues():void {
    this.addBookForm.patchValue({
      title: "title from patch value, default after initialization",
      author: "author from pathc value, default laterly "
    });
  }
}
