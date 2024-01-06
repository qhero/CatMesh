// image.service.ts

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CatModel } from '../model/catModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private catSourceUrl = './assets/cats.json';

  constructor(private http: HttpClient) {}

  getImages(): Observable<CatModel[]> {
    return this.http
      .get<{ images: CatModel[] }>(this.catSourceUrl)
      .pipe(map((data) => data.images));
  }
}
