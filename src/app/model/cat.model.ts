export class CatModel {
  id: string;
  url: string;
  voteCount: number;

  constructor(id: string, url: string, voteCount: number) {
    this.id = id;
    this.url = url;
    this.voteCount = voteCount;
  }
}
