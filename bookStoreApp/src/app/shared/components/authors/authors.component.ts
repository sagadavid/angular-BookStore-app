import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  @Input() valueInput: string; //use it either in ts or html file
  @Input() dinamicInput: number;
  @Input() boolInput: boolean;

  constructor() {}

  ngOnInit(): void {}
}
