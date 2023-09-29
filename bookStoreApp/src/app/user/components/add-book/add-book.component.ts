import { FormsModule } from '@angular/forms';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit, AfterViewChecked {
  @ViewChild('myNgForm') myNgForm: ElementRef;
  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    console.log(this.myNgForm);
  }
}
