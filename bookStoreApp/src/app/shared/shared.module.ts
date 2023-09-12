import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BooksRoutingModule } from '../books/books-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule, BooksRoutingModule],
  exports: [ToolbarComponent, FooterComponent, MatCardModule], //others need to reach card module aswell
})
export class SharedModule {}
