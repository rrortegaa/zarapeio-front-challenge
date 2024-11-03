import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zarapeio-front-challenge';
}
