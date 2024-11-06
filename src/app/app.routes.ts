import { provideRouter, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    title: 'Dashboard page',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    title: 'Profile page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
