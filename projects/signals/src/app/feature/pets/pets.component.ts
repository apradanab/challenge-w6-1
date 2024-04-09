import { Component, Input } from '@angular/core';
import { Pets } from '../../core/model';

@Component({
  selector: 'isdi-pets',
  standalone: true,
  imports: [],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
 @Input({ required: true }) pet: Pets = {} as Pets;
}
