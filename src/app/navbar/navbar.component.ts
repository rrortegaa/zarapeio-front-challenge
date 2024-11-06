import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  email: string = '';

  constructor() {}

  onClick() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.email = this.authService.getUserEmail();
  }
}
