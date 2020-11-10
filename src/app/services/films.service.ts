import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsResponse } from '../interface/films-response';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=58d3fba38236457578d2c5eb8f45eb56&language=en-US&page=1'
    );
  }
  getUpcomming(): any {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=58d3fba38236457578d2c5eb8f45eb56'
    );
  }
}
