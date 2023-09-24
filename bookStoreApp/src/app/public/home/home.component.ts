import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  public upCountHome: number = 0;
  public homeBool: boolean = false;
  public upCounter() {
    this.upCountHome++;
    this.homeBool = !this.homeBool;
  }
}
