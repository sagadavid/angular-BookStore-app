import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestService } from '../../services/test.service';

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

  // @Output() data2Parent = new EventEmitter<string>();

  constructor(private passDataViaService: TestService) {}
  public pass2Parent(): void {
    // this.data2Parent.emit('message emits from child 2 parent');
    this.passDataViaService.passData =
      'passing data from child to parent via service';
  }

  ngOnInit(): void {}
}
