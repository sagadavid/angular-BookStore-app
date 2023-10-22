import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorAddressComponent } from './components/author-address/author-address.component';
import { BoolformatPipe } from './pipes/boolformat.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorAddressComponent,
    AuthorAddressComponent,
    BoolformatPipe,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, HttpClientModule],
  exports: [
    ToolbarComponent,
    FooterComponent,
    MatCardModule,
    AuthorsComponent,
    AuthorAddressComponent,
    MaterialModule,
    BoolformatPipe,
    HttpClientModule
  ], //others need to reach card module aswell
})
export class SharedModule {}
