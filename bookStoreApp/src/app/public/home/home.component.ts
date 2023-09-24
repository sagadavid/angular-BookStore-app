import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public passDataViaService: TestService) {}
  ngOnInit(): void {}

  public receiveFrChild($event: any): void {
    console.log($event);
  }
}
