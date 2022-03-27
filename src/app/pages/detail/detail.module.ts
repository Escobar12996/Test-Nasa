import { ComponentsModule } from './../../components/components.module';
import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DetailModule { }
