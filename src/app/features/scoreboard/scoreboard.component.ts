import { Component } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {
  scoreboard$ = this.voteService.getScoreboard().pipe(
    map((scoreboard) =>
      scoreboard.sort((a, b) => b.totalVotes - a.totalVotes)
    )
  );
  constructor(private voteService: VoteService){}
}
