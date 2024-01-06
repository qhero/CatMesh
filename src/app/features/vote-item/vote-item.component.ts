import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CatModel } from '../../model/catModel';

@Component({
  selector: 'app-vote-item',
  templateUrl: './vote-item.component.html',
  styleUrls: ['./vote-item.component.css'],
})
export class VoteItemComponent implements OnInit {
  @Input() item: CatModel = {} as CatModel;
  @Input() nbrItem: number = 0;

  id: string = '';
  urlImage: string = '';
  loadingImage: boolean = true;
  loaderUrl: string = './assets/loader.gif'

  ngOnInit(): void {
    this.id = this.item.id;
    this.urlImage = this.item.url;
  }

  onImageLoad() {
    console.log('loade')
    this.loadingImage = false;
  }
}
