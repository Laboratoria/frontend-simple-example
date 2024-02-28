import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MovieData } from '../shared/interfaces/Movie';
import data from "../data/ghibli/ghibli";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllMovies():Observable<MovieData> {
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(map((resp:any) => {
      return data as MovieData
    }));
  }
}
