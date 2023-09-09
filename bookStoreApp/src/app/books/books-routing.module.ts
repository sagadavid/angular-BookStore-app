import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from '../commons/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'all-books', component: AllBooksComponent },
  {
    path: 'book-details/:bookId/author/:authorId',
    component: BookDetailsComponent,
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
