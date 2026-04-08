import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, output, signal } from '@angular/core';

import { Character } from '../../models/character.model';
import { HpApiService } from '../../services/hp-api.service';

@Component({
  selector: 'app-characterdetails',
  imports: [CommonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails {
  private readonly hpApiService = inject(HpApiService);

  readonly characterId = input<string | null>(null);
  readonly closed = output<void>();

  protected readonly character = signal<Character | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal('');

  constructor() {
    effect(() => {
      const id = this.characterId();

      if (!id) {
        this.character.set(null);
        this.errorMessage.set('');
        this.isLoading.set(false);
        return;
      }

      this.fetchCharacter(id);
    });
  }

  private fetchCharacter(id: string): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.hpApiService.getCharacterById(id).subscribe({
      next: (character) => {
        this.character.set(character);
        this.isLoading.set(false);

        if (!character) {
          this.errorMessage.set('No details were found for the selected character.');
        }
      },
      error: () => {
        this.character.set(null);
        this.errorMessage.set('Unable to load character details right now.');
        this.isLoading.set(false);
      }
    });
  }

  protected closeDetails(): void {
    this.closed.emit();
  }
}
