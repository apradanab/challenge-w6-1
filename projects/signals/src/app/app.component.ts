import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { PetsComponent } from './feature/pets/pets.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, PetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
