import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public countrService: CounterService) {}

  public increase(): void {
    this.countrService.incCount();
  }
  public decrease(): void {
    this.countrService.decCount();
  }

  ngOnInit(): void {}
}
