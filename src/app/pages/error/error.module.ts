import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class ErrorModule { }
