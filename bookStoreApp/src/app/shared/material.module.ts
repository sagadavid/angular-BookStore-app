import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  //material module is a module to only share.. or we dont have any component indie.. so no need to import but only export
  exports: [MatToolbarModule, MatIconModule, MatButtonModule], //a false refrence to material module  here itself causes infinite loop and stack overflow !
})
export class MaterialModule {}
