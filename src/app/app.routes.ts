import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page',
  },
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard page',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile page',
  },
];
