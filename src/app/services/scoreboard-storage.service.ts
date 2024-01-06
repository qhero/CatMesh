// scoreboard-storage.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scoreboard } from '../model/scoreboard.model';

@Injectable({
  providedIn: 'root',
})
export class ScoreboardStorageService {
  private localStorageKey = 'scoreboard';

  getScoreboard(): Observable<Scoreboard[]> {
    const storedData = localStorage.getItem(this.localStorageKey);
    const scoreboard = storedData ? JSON.parse(storedData) : [];
    return of(scoreboard);
  }

  setScoreboard(scoreboard: Scoreboard[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(scoreboard));
  }
}
