import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VoteComponent } from './features/vote/vote.component';
import { ScoreboardComponent } from './features/scoreboard/scoreboard.component';

const routes: Routes = [
  {
    path: "",
    component: VoteComponent,
  },
  {
    path: "scoreboard",
    component: ScoreboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
