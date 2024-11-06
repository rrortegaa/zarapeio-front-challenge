import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  authService: AuthService = inject(AuthService);

  constructor() {}

  submit() {
    // console.log('email:', this.loginForm.value.email);
    this.authService.login(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? ''
    );
  }
}
