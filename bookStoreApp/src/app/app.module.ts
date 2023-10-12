import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/home/home.component';
import { TestService } from './shared/services/test.service';
import { CounterFactory } from './shared/services/counter.factory';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    CounterFactory, //useFactory from another file
    TestService, //needen in counter factory, refere it among a providers also
    {
      provide: 'appTitleToken',
      useValue: {
        title: 'title from useValue as object/any',
        description: 'description from useValue',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
