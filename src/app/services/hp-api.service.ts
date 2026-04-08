import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Character } from '../models/character.model';
import { HogwartsHouse } from '../models/house.model';
import { Spell } from '../models/spell.model';

@Injectable({
  providedIn: 'root'
})
export class HpApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://hp-api.onrender.com/api';

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }

  getCharacterById(id: string): Observable<Character | null> {
    return this.http
      .get<Character | Character[]>(`${this.baseUrl}/character/${id}`)
      .pipe(map((response) => (Array.isArray(response) ? response[0] ?? null : response)));
  }

  getStudents(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/students`);
  }

  getStaff(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/staff`);
  }

  getCharactersByHouse(house: HogwartsHouse | string): Observable<Character[]> {
    return this.http.get<Character[]>(
      `${this.baseUrl}/characters/house/${house.toLowerCase()}`
    );
  }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(`${this.baseUrl}/spells`);
  }
}
