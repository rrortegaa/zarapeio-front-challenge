import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { MeowComponent } from '../meow/meow.component';
import { PurrfectService } from '../services/purrfect.service';
import { Meow } from '../meow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavbarComponent, MeowComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  purrfectService: PurrfectService = inject(PurrfectService);
  meowpedia: Meow[] = [];
  loading: boolean = true;
  #subscriptions: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    const meowsSubscription = this.purrfectService
      .getAllCats()
      .subscribe((meowpedia: Meow[]) => {
        this.meowpedia = meowpedia;
        this.loading = false;
      });

    this.#subscriptions.add(meowsSubscription);
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
