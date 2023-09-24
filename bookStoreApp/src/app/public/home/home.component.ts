import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  Renderer2,
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
  @ViewChild('pageTitle') private pageTitle: ElementRef;

  constructor(
    public countrService: CounterService,
    //inject a new service as useValue of providers
    @Inject('appTitleToken') public titleFromToken: any,
    private renderer: Renderer2
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
      //this.decrButton.color = 'warn';
      //this.pageTitle.nativeElement.innerHtml = 'new page title for home';
      this.renderer.setProperty(this.decrButton, 'color', 'warn');
      this.renderer.setProperty(
        this.pageTitle.nativeElement,
        'innerHTML',
        'new page title for home'
      );
      console.log(this.decrButton);
      console.log(this.pageTitle);
    }, 0);
  }
}
