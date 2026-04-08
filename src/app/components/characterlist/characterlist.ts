import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, output, signal } from '@angular/core';

import { Character } from '../../models/character.model';
import { HpApiService } from '../../services/hp-api.service';

@Component({
  selector: 'app-characterlist',
  imports: [CommonModule],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist {
  private readonly hpApiService = inject(HpApiService);

  readonly houseFilter = input('all');
  readonly characterSelected = output<string>();

  protected readonly characters = signal<Character[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly selectedCharacterId = signal<string | null>(null);

  constructor() {
    effect(() => {
      const house = this.houseFilter();
      this.loadCharacters(house);
    });
  }

  private loadCharacters(house: string = this.houseFilter()): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    const request =
      house === 'all'
        ? this.hpApiService.getCharacters()
        : this.hpApiService.getCharactersByHouse(house);

    request.subscribe({
      next: (characters) => {
        this.characters.set(characters);
        this.selectedCharacterId.set(null);

        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load Harry Potter characters right now.');
        this.isLoading.set(false);
      }
    });
  }

  protected selectCharacter(id: string): void {
    this.selectedCharacterId.set(id);
    this.characterSelected.emit(id);
  }
}
