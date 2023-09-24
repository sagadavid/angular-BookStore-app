import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  public dataFrParent: number;
  public setData(value: number): void {
    this.dataFrParent = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
