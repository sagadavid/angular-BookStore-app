import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/allbooks/allbooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecentsBooksComponent } from './components/recents-books/recents-books.component';
import { BookCarComponent } from './components/book-car/book-car.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent,
    RecentsBooksComponent,
    BookCarComponent,
    AddBookComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, SharedModule, FormsModule],
})
export class BooksModule {}
