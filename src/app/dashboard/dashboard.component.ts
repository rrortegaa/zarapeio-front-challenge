import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CatologyComponent } from '../catology/catology.component';
import { PurrfectService } from '../purrfect.service';
import { Catology } from '../catology';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CatologyComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  purrfectService: PurrfectService = inject(PurrfectService);

  catologyList: Catology[] = [];

  constructor() {
    this.purrfectService.getAllCats().then((catologyList: Catology[]) => {
      this.catologyList = catologyList;
    });

    // this.catologyList = this.purrfectService.getAllCats();
  }
}
