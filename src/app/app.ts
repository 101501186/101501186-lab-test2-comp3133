import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Characterdetails } from './components/characterdetails/characterdetails';
import { Characterlist } from './components/characterlist/characterlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, Characterlist, Characterdetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('101501186-lab-test2-comp3133');
  protected readonly selectedCharacterId = signal<string | null>(null);

  protected onCharacterSelected(id: string): void {
    this.selectedCharacterId.set(id);
  }

  protected closeCharacterDetails(): void {
    this.selectedCharacterId.set(null);
  }
}
