import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('authors') private childAuthor: AuthorsComponent;
  @ViewChild('decrButton') private decrButton: MatButton;

  constructor(
    public countrService: CounterService,
    //inject a new service as useValue of providers
    @Inject('appTitleToken') public titleFromToken: any
  ) {}

  valueInput = 'value from home.ts not home.html';

  public increase(): void {
    this.countrService.incCount();
  }
  public decrease(): void {
    this.countrService.decCount();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.childAuthor.setData(234);
      this.decrButton.color = 'warn';
    }, 0);
  }
}
