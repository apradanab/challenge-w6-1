import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './model';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  urlBase = 'http://localhost:4200'
  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.urlBase);
  }
}
