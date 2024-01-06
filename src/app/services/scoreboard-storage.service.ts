// scoreboard-storage.service.ts
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Scoreboard } from '../model/scoreboard.model';
import { CatService } from './cat.service';
import { CatModel } from '../model/cat.model';

@Injectable({
  providedIn: 'root',
})
export class ScoreboardStorageService {
  private localStorageKey = 'scoreboard';

  constructor(private catService: CatService){}

  getScoreboard(): Observable<Scoreboard[]> {
    const storedData = localStorage.getItem(this.localStorageKey);
    const scoreboard = storedData ? JSON.parse(storedData) : [];
    
    return this.catService.getImages().pipe(
      map((catModels: CatModel[]) => {
        return scoreboard.map((scoreboardItem: Scoreboard) => ({
          ...scoreboardItem,
          catUrl: catModels.find((catModel) =>  catModel.id == scoreboardItem.catId)?.url || ''
        }));
      })
    );
  }

  setScoreboard(scoreboard: Scoreboard[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(scoreboard));
  }
}
