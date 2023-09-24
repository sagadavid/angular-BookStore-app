import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  public data2TempRef: number;
  public setData2TemplateRef(value: number): void {
    this.data2TempRef = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
