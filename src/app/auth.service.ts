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
      this.#router.navigate(['']);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.#router.navigate(['login']);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    } else return true;
  }

  getUser() {
    const email = localStorage.getItem('email');
    console.log('Email: ', email);

    return email ?? 'no exist';
  }
}
