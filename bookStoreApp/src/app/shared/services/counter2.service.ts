import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class Counter2Service extends CounterService {
  override counter: number = 0;

  constructor() {
    super();
  }

  public override incCount(): void {
    this.counter += 2;
  }
  public override decCount(): void {
    this.counter -= 2;
  }
}
