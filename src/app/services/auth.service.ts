import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  #router = inject(Router);

  login(email: string, password: string) {
    if (email !== '' && password !== '') {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      this.#router.navigate(['']);
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.#router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  getUserEmail(): string {
    return localStorage.getItem('email') ?? 'not found';
  }
}
