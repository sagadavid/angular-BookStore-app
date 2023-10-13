import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public titleErrorMessage: string;

  constructor(private bookService:BookService) {}

  private initForm() {
    this.addBookForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      author: new FormControl('ferdinand von schirach', [Validators.required, Validators.minLength(3)]),
      totalPages: new FormControl(239),
      price: new FormGroup({
        currency: new FormControl(),
        value: new FormControl()
      }),
      publishedOn: new FormControl(),
      isPublished: new FormControl(),
      formatType: new FormControl(),
      pdfFormat: new FormControl(),
      docFormat: new FormControl(),

    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();


    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      // console.log(x);
      this.validateTitleControl(titleControl);
    })

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe(x => {
      this.formatTypeChanged(x);
    })
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

  private validateTitleControl(titleControl: AbstractControl) {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty))
    {
      if (titleControl.errors['required']) {
        this.titleErrorMessage = 'title is required';
      }
      else if (titleControl.errors['minlength']) {
         this.titleErrorMessage = 'title\'s minimum length is ' + titleControl.errors?.['minLength'].requiredLength;
      }

      }
  }

  private formatTypeChanged(formatType: string): void {

    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    if (formatType === 'pdf') {
      pdfControl?.addValidators(Validators.required)
      docControl?.clearValidators();
    }
    else if (formatType === 'doc') {
      docControl?.addValidators(Validators.required)
      pdfControl?.clearValidators();
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }
}
