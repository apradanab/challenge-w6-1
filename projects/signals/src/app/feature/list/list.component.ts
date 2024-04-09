import { Component } from '@angular/core';
import { Pets } from '../../core/model';
import { StoreService } from '../../core/store.service';
import { PetsComponent } from '../pets/pets.component';

@Component({
  selector: 'isdi-list',
  standalone: true,
  imports: [ PetsComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  pets: Pets[] = [];
  constructor(private store: StoreService) {}
  ngOnInit() {
    this.pets = this.store.sendPets()();
    console.log(this.pets);
  }
}
