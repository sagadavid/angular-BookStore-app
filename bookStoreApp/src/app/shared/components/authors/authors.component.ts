import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit, OnChanges {
  constructor() {
    console.log('child constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() passedData: number;
  @Input() passedBool: boolean;

  ngOnInit(): void {
    //constructor and ngOnInit runs only once, const runs first, onchanges second, oninit third(before dom)
    console.log('child ngOnInit');
  }
}
