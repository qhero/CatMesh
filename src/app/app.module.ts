import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VoteComponent } from './features/vote/vote.component';
import { VoteItemComponent } from './features/vote-item/vote-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CatService } from './services/cat.service';
import { HttpClientModule } from '@angular/common/http';
import { VoteService } from './services/vote.service';
import { ScoreboardComponent } from './features/scoreboard/scoreboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, VoteComponent, VoteItemComponent, ScoreboardComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [CatService, VoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
