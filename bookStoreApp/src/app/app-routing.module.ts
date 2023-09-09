import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './commons/about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './commons/auth/auth.component';
import { AuthModule } from './commons/auth/auth.module';
import { UserComponent } from './user/user.component';
import { BooksModule } from './books/books.module';

const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./commons/auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
  },
  {
    path: 'books',
    component: BooksModule,
    loadChildren: () =>
      import('./books/books.module').then((x) => x.BooksModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
