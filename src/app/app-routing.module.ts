import { ErrorComponent } from './pages/error/error.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "details", component: DetailComponent },
  { path: "**", component: ErrorComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);
