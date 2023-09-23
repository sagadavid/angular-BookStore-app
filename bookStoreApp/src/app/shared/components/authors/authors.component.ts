import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  // @Input() valueInput: string; //use it either in ts or html file
  // @Input() dinamicInput: number;
  // @Input() boolInput: boolean;
  // //@Input() modifyB4UseData: number;
  // private _modifyB4Use: number;

  // @Input()
  // set modifyB4UseData(modificator: number) {
  //   this._modifyB4Use = ++modificator;
  // }
  // get modifyB4UseData() {
  //   return this._modifyB4Use;
  // }
  public data2TempRef: number;
  public setData2TemplateRef(value: number): void {
    this.data2TempRef = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
