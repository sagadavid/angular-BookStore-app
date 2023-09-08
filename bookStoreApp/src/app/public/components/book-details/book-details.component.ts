import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  public bookId: number = 0;
  public authorId: number = 0;
  public queryName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route);
    //lets see what value parameters are obtained by activatedroute
    this.route.params.subscribe((param) => {
      console.log(param);
      this.authorId = param['authorId'];
      this.bookId = param['bookId'];
    });

    this.route.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
      this.queryName = queryParam['name'];
    });
  }
}
