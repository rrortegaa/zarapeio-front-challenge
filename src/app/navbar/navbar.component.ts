import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  authService: AuthService = inject(AuthService);

  constructor(authService: AuthService) {}

  onClick() {
    // console.log('is logout?', this.authService.logout);
    this.authService.logout();
  }
}
