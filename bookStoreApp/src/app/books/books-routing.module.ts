import { NgModule } from '@angular/core';
import { AllBooksComponent } from './components/allbooks/allbooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'books', component: AllBooksComponent },
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
