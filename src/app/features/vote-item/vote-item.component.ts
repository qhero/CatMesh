import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CatModel } from '../../model/cat.model';
import { VoteService } from '../../services/vote.service';
import { RefreshService } from '../../services/refresh.service';

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

  constructor(private voteService: VoteService, private refreshService: RefreshService){
    
  }

  ngOnInit(): void {
    this.id = this.item.id;
    this.urlImage = this.item.url;
  }

  triggerRefresh(): void {
    this.refreshService.triggerRefresh();
  }

  onImageLoad() {
    this.loadingImage = false;
  }

  onClickVoteThisCat(){
    console.log('click')
    this.voteService.voteForCat(this.id);
    this.triggerRefresh();
  }
}
