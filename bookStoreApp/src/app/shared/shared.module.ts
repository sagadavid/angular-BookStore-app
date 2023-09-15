import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ToolbarComponent, FooterComponent, MatCardModule, AuthorsComponent], //others need to reach card module aswell
})
export class SharedModule {}
