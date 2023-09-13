import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { DependancyService } from './dependency.service';

@Injectable({ providedIn: 'root' })
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
