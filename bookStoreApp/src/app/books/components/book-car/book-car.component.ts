import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css'],
})
export class BookCarComponent implements OnInit {

  @Input('alleBooks') books:BookModel[]

  constructor(){}

ngOnInit(): void {

}

}
