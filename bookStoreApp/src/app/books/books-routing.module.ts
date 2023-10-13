import { NgModule } from '@angular/core';
import { AllBooksComponent } from './components/allbooks/allbooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';
import { RecentsBooksComponent } from './components/recents-books/recents-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: 'new', component: AddBookComponent },
  { path: 'recent', component: RecentsBooksComponent },
  { path: 'new-reactive', component: AddBookReactiveComponent },
  {
    path: ':bookId',
    component: BookDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
