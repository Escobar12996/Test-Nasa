import { ErrorModule } from './pages/error/error.module';
import { DetailModule } from './pages/detail/detail.module';
import { ApiNasaService } from './services/api-nasa.service';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    APP_ROUTING,
    DashboardModule,
    DetailModule,
    ErrorModule,
    NoopAnimationsModule
  ],
  declarations: [AppComponent],
  providers: [ApiNasaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
