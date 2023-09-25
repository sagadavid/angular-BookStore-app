import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  ContentChild,
} from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../model/author.model';
import { AuthorAddressComponent } from '../author-address/author-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  @Input() passedData: number;
  @Input() passedBool: boolean;
  @Input() modelledAuthor: AuthorModel;
  @ContentChild(AuthorAddressComponent)
  contChildAuthorAdrsKomp: AuthorAddressComponent;
  public authorCount: number = 0;

  constructor() {
    // console.log('child constructor');
  }
  ngAfterContentInit(): void {
    console.log('after content init: ' + this.contChildAuthorAdrsKomp?.address);
  }
  ngAfterContentChecked(): void {
    console.log(
      'after content checked: ' + this.contChildAuthorAdrsKomp?.address
    );
  }
  ngDoCheck(): void {
    // console.log(this.modelledAuthor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log('child ngOnInit');
  }

  authorCounter(): void {
    this.authorCount++;
  }
}
