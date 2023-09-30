import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements AfterViewChecked {
  @ViewChild('myNgForm') myForm: ElementRef;
  ngAfterViewChecked(): void {
    console.log(this.myForm);
  }
}
