import { Component } from '@angular/core';
import { VoteService } from '../../services/vote.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {
  scoreboard$ = this.voteService.getScoreboard();

  constructor(private voteService: VoteService) {}

}
