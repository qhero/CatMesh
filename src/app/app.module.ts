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

@NgModule({
  declarations: [AppComponent, VoteComponent, VoteItemComponent, ScoreboardComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [CatService, VoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
