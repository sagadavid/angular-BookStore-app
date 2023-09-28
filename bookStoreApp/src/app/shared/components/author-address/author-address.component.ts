import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-author-address',
  templateUrl: './author-address.component.html',
  styleUrls: ['./author-address.component.css'],
})
export class AuthorAddressComponent implements OnDestroy {
  //use ondestroy against memnory leaks... to kill some instanses manually 1/ to de-subscribe observalbles manually, 2/ clear intervals manually 3/ clear events on html.
  ngOnDestroy(): void {
    console.log('grand child adress comp destroys');
  }
  @Input() address: string;
}
