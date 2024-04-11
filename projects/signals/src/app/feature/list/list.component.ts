import { Component, inject } from '@angular/core';
import { StoreService } from '../../core/store.service';
import { PetsComponent } from '../pets/pets.component';


@Component({
  selector: 'isdi-list',
  standalone: true,
  imports: [ PetsComponent ],
  template: `
     <ul>
      <li>
      <!-- @for (item of items; track $index) {} -->
      @for (pet of this.storeService.addPet(); track pet.name) {
        <p>Id: {{ pet.id }}</p>
        <p>Name: {{ pet.name }}</p>
        <p>Species: {{ pet.species }}</p>
        <p>Owner:{{ pet.owner }}</p>
      }
    </li>
    </ul>
  `,
  styles: ``
})
export class ListComponent {
  storeService = inject(StoreService)
}
