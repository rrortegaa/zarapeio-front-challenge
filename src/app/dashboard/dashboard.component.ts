import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { CatologyComponent } from '../catology/catology.component';
import { PurrfectService } from '../purrfect.service';
import { Catology } from '../catology';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CatologyComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  purrfectService: PurrfectService = inject(PurrfectService);
  catologyList: Catology[] = [];
  loading: boolean = true;
  #subscriptions: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    const catsSubscription = this.purrfectService
      .getAllCats()
      .subscribe((catologyList: Catology[]) => {
        this.catologyList = catologyList;
        this.loading = false;
      });

    this.#subscriptions.add(catsSubscription);
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
