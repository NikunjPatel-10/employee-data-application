import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipe/search.pipe';
import { SortPipe } from './pipe/sort.pipe';



@NgModule({
  declarations: [
    SearchPipe,
    SortPipe,
 
  ],
  imports: [
    CommonModule
  ],
  exports:[SearchPipe, SortPipe]
})
export class SharedModule { }
