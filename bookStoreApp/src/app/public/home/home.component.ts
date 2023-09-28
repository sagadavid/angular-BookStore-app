import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorModel } from 'src/app/shared/model/author.model';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  @ViewChild(AuthorsComponent) authorKomp: AuthorsComponent;
  @ViewChild('btn2AfterView')
  btn2AV: ElementRef;
  public forfatter: AuthorModel = { id: 22, name: 'dan brown' };
  public upCountHome: number = 0;
  public homeBool: boolean = false;
  public homeAddress: string = 'potamac yard, cristal city, va, ';
  private time: any;

  constructor() {}
  ngOnDestroy(): void {
    //console.log('home components destroy');
    //until killed, timer at home component will continue to count (initilized in oninit), no matter you navigate to another page (observe console after commenting clearInterval() method below). it needs to be destroyed.
    console.log('ondestroy called');
    clearInterval(this.time);
  }
  ngAfterViewChecked(): void {
    //message from parent comp, change in child component, track the change after viewed.
    //console.log(this.authorKomp.authorCount);
  }
  ngAfterViewInit(): void {
    //console.log(this.btn2AV);
    //this.btn2AV.nativeElement.innerHTML = 'button text updated after view init';
  }

  ngOnInit(): void {
    this.timer();
  }

  public upCounter() {
    this.upCountHome++;
    this.homeBool = !this.homeBool;

    this.forfatter.id = this.upCountHome++;

    this.homeAddress = this.homeAddress + this.upCountHome;
    //cant get button/elementRef, button is called after view, not before init
    //console.log(this.btn2AV);
  }

  timer(): void {
    this.time = setInterval(() => {
      this.upCountHome++;
      console.log(this.upCountHome);
    }, 1000);
  }
}
