import { Component, OnInit } from '@angular/core';
import { CatModel } from '../../model/catModel';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  title = 'Vote';

  voteArray: CatModel[] = [];
  sourceCat: CatModel[] = [];
  elm: CatModel | undefined;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getImages().subscribe((src) => {
      this.sourceCat = src;
      this.selectRandomCats();
    });
  }

  selectRandomCats(): void {
    const totalCats = this.sourceCat.length;

    if (totalCats >= 2) {
      const randomIndices = this.getRandomIndices(totalCats, 2);

      this.voteArray = randomIndices.map((index) => this.sourceCat[index]);
    }
  }

  getRandomIndices(max: number, count: number): number[] {
    const indices: number[] = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
}
