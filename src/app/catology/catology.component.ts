import { Component, Input } from '@angular/core';
import { Catology } from '../catology';

@Component({
  selector: 'app-catology',
  standalone: true,
  imports: [],
  templateUrl: './catology.component.html',
  styleUrl: './catology.component.scss',
})
export class CatologyComponent {
  @Input() catology!: Catology;

  // baseUrl = 'https://cdn2.thecatapi.com/images/';
}
