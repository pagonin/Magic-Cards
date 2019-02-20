import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatProgressSpinnerModule,
   
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
        ],

  exports :
  [
    MatButtonModule,
    MatIconModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
