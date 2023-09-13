import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './commons/about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './commons/home/home.component';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { DependancyService } from './shared/services/dependency.service';
import { TestService } from './shared/services/test.service';

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
  ],
  providers: [
    {
      //if test service is false instantiate counter2service else counterservice
      provide: CounterService,
      useFactory: (testService: TestService) =>
        testService.status ? new CounterService() : new Counter2Service(),
      deps: [TestService], //dependancy of useFactory
    },
    TestService, //refere it among a providers also
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
