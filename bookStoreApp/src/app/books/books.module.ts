import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/allbooks/allbooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecentsBooksComponent } from './components/recents-books/recents-books.component'; //we need matcardmodule capabilities of shared module

@NgModule({
  declarations: [AllBooksComponent, BookDetailsComponent, BooksComponent, RecentsBooksComponent],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
})
export class BooksModule {}
