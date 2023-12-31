import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  counter: number = 0;

  constructor() {}

  public incCount(): void {
    this.counter++;
  }
  public decCount(): void {
    this.counter--;
  }
}
