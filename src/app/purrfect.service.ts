import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catology } from './catology';

@Injectable({
  providedIn: 'root',
})
export class PurrfectService {
  url = 'https://api.thecatapi.com/v1/breeds?limit=10&page=0';

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Catology[]> {
    return this.http.get<Catology[]>(this.url);
  }
}
