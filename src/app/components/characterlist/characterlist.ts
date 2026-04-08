import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

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

  protected readonly characters = signal<Character[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters(): void {
    this.hpApiService.getCharacters().subscribe({
      next: (characters) => {
        this.characters.set(characters);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load Harry Potter characters right now.');
        this.isLoading.set(false);
      }
    });
  }
}
