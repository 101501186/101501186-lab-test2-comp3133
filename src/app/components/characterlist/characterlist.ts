import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, output, signal } from '@angular/core';

import { Character } from '../../models/character.model';
import { HpApiService } from '../../services/hp-api.service';

@Component({
  selector: 'app-characterlist',
  imports: [CommonModule],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  private readonly hpApiService = inject(HpApiService);

  readonly characterSelected = output<string>();

  protected readonly characters = signal<Character[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly selectedCharacterId = signal<string | null>(null);

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters(): void {
    this.hpApiService.getCharacters().subscribe({
      next: (characters) => {
        this.characters.set(characters);
        const firstCharacterId = characters[0]?.id ?? null;
        this.selectedCharacterId.set(firstCharacterId);

        if (firstCharacterId) {
          this.characterSelected.emit(firstCharacterId);
        }

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
