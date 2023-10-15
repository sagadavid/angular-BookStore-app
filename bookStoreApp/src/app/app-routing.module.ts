import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './public/auth/auth.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './public/home/home.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title:'velkommen til bookstore appen' },
  { path: 'about-us', component: AboutUsComponent, title : 'om oss'},
  { path: 'how-it-works', component: HowItWorksComponent, title:'om hvordan det funker'},
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./public/auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'books',
    component: BooksComponent,
    loadChildren: () =>
      import('./books/books.module').then((x) => x.BooksModule),
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
