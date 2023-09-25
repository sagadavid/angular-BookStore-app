import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthorModel } from 'src/app/shared/model/author.model';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('btn2AfterView') btn2AV: ElementRef;
  public forfatter: AuthorModel = { id: 22, name: 'dan brown' };
  public upCountHome: number = 0;
  public homeBool: boolean = false;
  public homeAddress: string = 'potamac yard, cristal city, va, ';

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.btn2AV);
    this.btn2AV.nativeElement.innerHTML = 'button text updated after view init';
  }

  ngOnInit(): void {}

  public upCounter() {
    this.upCountHome++;
    this.homeBool = !this.homeBool;

    this.forfatter.id = this.upCountHome++;

    this.homeAddress = this.homeAddress + this.upCountHome;
    //cant get button/elementRef, button is called after view, not before init
    console.log(this.btn2AV);
  }
}
