import { Injectable, signal } from '@angular/core';
import { Pet } from './model';
import { RepoService } from './repo.service';

//type addPetDTO = Omit<Pet, 'id' | 'isAdopted'>;

@Injectable({
  providedIn: 'root'
})
export class StoreService {
private petState = signal<Pet[]>([])
public petState$= this.petState.asReadonly()

constructor( private repo: RepoService) {}

loadPets() {
  this.repo.getPets().subscribe({
    next: (data) => { this.petState.set(data)},
    error: (error) => {console.error(error)}
  })
}
addPet() {
  return this.petState()
}
// addPet(
//   //data: Omit<Pet, 'id' | 'isAdopted'>
//   //data:Partial<Pet>
//   //data: Pick<Pet, 'name' | 'species' | 'imgUrl' | 'owner'>
//   {name, species, owner, imgUrl}: addPetDTO):void {
// const newPet: Pet = {
//   id: crypto.randomUUID(),
//   imgUrl: imgUrl,
//   name: name,
//   species: species,
//   owner: owner,
//   isAdopted: false,
// };
// this.petState.update((pets) => [...pets, newPet]);
// }
}
