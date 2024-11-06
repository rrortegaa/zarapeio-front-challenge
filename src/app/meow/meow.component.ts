import { Component, Input } from '@angular/core';
import { Meow } from '../meow';

@Component({
  selector: 'app-meow',
  standalone: true,
  imports: [],
  templateUrl: './meow.component.html',
  styleUrl: './meow.component.scss',
})
export class MeowComponent {
  @Input() meow!: Meow;
}
