import { Injectable } from '@angular/core';

@Injectable()
export class Counter2Service {
  counter: number = 0;

  constructor() {}

  public incCount(): void {
    this.counter += 2;
  }
  public decCount(): void {
    this.counter -= 2;
  }
}
