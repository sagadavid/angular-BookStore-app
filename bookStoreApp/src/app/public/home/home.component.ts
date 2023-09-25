import { Component, OnInit } from '@angular/core';
import { AuthorModel } from 'src/app/shared/model/author.model';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public forfatter: AuthorModel = { id: 22, name: 'dan brown' };
  public upCountHome: number = 0;
  public homeBool: boolean = false;
  public homeAddress: string = 'potamac yard, cristal city, va, ';

  constructor() {}

  ngOnInit(): void {}

  public upCounter() {
    this.upCountHome++;
    this.homeBool = !this.homeBool;
    //if reference of object/forfatter is not changing, meaning, only value is changing, onChange cannot cath the change. check browser console. here we need ngDoCheck
    this.forfatter.id = this.upCountHome++;
    //an example of reference change-a new object create
    // this.forfatter = { id: this.upCountHome++, name: 'david saga' };
    //afterinit fungerer engang etter docheck, derimot, afterchecked fungerer enda etter content forandret
    //refresh page vs click button.
    this.homeAddress = this.homeAddress + this.upCountHome;
  }
}
