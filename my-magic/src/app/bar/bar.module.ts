import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule
  ],
  exports:[
      //Rend visible le composant dans le scope (module) supérieur
      BarComponent
  ]
})
export class BarModule { }
