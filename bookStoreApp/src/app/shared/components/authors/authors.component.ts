import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../model/author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  constructor() {
    console.log('child constructor');
  }
  //see dynamic data of content init and checked
  ngAfterContentInit(): void {
    console.log('after content init');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngDoCheck(): void {
    //now observe chang on browser console, get updated values by help of ngDoCheck
    console.log(this.modelledAuthor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() passedData: number;
  @Input() passedBool: boolean;
  @Input() modelledAuthor: AuthorModel;

  ngOnInit(): void {
    //constructor and ngOnInit runs only once, const runs first, onchanges second, oninit third(before dom)
    console.log('child ngOnInit');
  }
}
