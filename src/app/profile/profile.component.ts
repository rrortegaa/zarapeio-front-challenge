import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  email: string = '';

  #authService: AuthService = inject(AuthService);

  constructor() {}

  ngOnInit(): void {
    this.email = this.#authService.getUserEmail();
  }
}
