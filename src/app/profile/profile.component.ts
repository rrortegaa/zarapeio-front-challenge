import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  email: string = '';

  constructor() {
    this.email = localStorage.getItem('email') ?? 'not found';
  }

  ngOnInit(): void {
    console.log('Email: ', this.email);
  }
}
