import { Injectable, signal } from '@angular/core';
import { RepoService } from './repo.service';
import { Pets } from './model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private pets = signal<Pets[]>([]);
  constructor(private repo: RepoService) {
    this.loadPets();
  }
  loadPets() {
    this.repo.getPets().subscribe({
      next: (data) => {
        this.pets.set(data);
        console.log('pasa por el store');
        console.log(this.pets());
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
  sendPets() {
    return this.pets;
  }
}
