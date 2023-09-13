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
    { provide: CounterService, useExisting: Counter2Service },
    DependancyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
