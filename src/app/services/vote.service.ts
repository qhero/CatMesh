import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Scoreboard } from '../model/scoreboard.model';
import { ScoreboardStorageService } from './scoreboard-storage.service';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  private scoreboardsSubject: BehaviorSubject<Scoreboard[]> = new BehaviorSubject<Scoreboard[]>([]);

  constructor(private scoreboardStorageService: ScoreboardStorageService) {
    this.loadScoreboard();
  }

  private loadScoreboard(): void {
    this.scoreboardStorageService.getScoreboard().subscribe((scoreboard) => {
      this.scoreboardsSubject.next(scoreboard);
    });
  }

  private saveScoreboard(scoreboard: Scoreboard[]): void {
    this.scoreboardsSubject.next(scoreboard);
    this.scoreboardStorageService.setScoreboard(scoreboard);
  }

  private findScoreboardIndex(catId: string): number {
    return this.scoreboardsSubject.value.findIndex((s) => s.catId === catId);
  }

  private updateScoreboard(catId: string, totalVotes: number, catUrl: string): void {
    const index = this.findScoreboardIndex(catId);

    if (index !== -1) {
      const scoreboards = [...this.scoreboardsSubject.value];
      scoreboards[index] = { catId, totalVotes, catUrl };
      this.saveScoreboard(scoreboards);
    } else {
      const scoreboards = [...this.scoreboardsSubject.value, { catId, totalVotes, catUrl}];
      this.saveScoreboard(scoreboards);
    }
  }

  voteForCat(catId: string): void {
    const currentScoreboard = this.scoreboardsSubject.value.find((s) => s.catId === catId);

    const newTotalVotes = (currentScoreboard?.totalVotes || 0) + 1;
    this.updateScoreboard(catId, newTotalVotes, currentScoreboard?.catUrl || '');
  }

  getTotalVotesForCat(catId: string): Observable<number> {
    return this.scoreboardsSubject.pipe(
      map((scoreboards) => (scoreboards.find((s) => s.catId === catId)?.totalVotes || 0))
    );
  }

  getScoreboard(): Observable<Scoreboard[]> {
    return this.scoreboardsSubject.asObservable();
  }
}
