import { DetailComponent } from './pages/detail/detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "details", component: DetailComponent }
];

export const APP_ROUTING = RouterModule.forRoot(appRoutes);
