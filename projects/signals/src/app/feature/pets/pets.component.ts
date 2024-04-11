import { Component, input } from '@angular/core';
import { Pet } from '../../core/model';

@Component({
  selector: 'isdi-pets',
  standalone: true,
  imports: [],
  template: `
  <li>
  <p>Name: {{ pet().name }}</p>
</li>
<li>
  <p>Owner: {{ pet().owner }}</p>
</li>
<li>
  <p>Adopted: {{ pet().isAdopted ? "yes" : "no" }}</p>
</li>
`,
  styles: `
  `
})
export class PetsComponent {
 pet = input<Pet>({} as Pet);
}
