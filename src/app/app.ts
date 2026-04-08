import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { Characterdetails } from './components/characterdetails/characterdetails';
import { Characterfilter } from './components/characterfilter/characterfilter';
import { Characterlist } from './components/characterlist/characterlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, FormsModule, Characterfilter, Characterlist, Characterdetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('101501186-lab-test2-comp3133');
  protected readonly selectedCharacterId = signal<string | null>(null);
  protected readonly selectedHouse = signal('all');

  protected onCharacterSelected(id: string): void {
    this.selectedCharacterId.set(id);
  }

  protected onHouseChanged(house: string): void {
    this.selectedHouse.set(house);
    this.selectedCharacterId.set(null);
  }

  protected closeCharacterDetails(): void {
    this.selectedCharacterId.set(null);
  }
}
