import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ApiNasaService } from 'src/app/services/api-nasa.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  providers: [ApiNasaService],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
