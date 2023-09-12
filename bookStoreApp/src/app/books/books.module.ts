import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/allbooks/allbooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
// import { BookService } from './services/book.service';

@NgModule({
  declarations: [AllBooksComponent, BookDetailsComponent, BooksComponent],
  imports: [CommonModule, BooksRoutingModule],
  // providers: [BookService],
})
export class BooksModule {}
