import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FilmsResponse, Film } from '../interface/films-response';
import { tap, map, catchError } from 'rxjs/operators';
import { DetailResponse } from '../interface/detail-response';
import { CreditsFilm, Cast } from '../interface/creditsFilm';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private pages = 1;
  public charging: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '58d3fba38236457578d2c5eb8f45eb56',
      language: 'en-EN',
      page: this.pages.toString(),
    };
  }

  getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=58d3fba38236457578d2c5eb8f45eb56&language=en-US&page=1'
    );
  }
  getUpcomming(): any {
    // console.log('chanrging the api');
    this.charging = true;
    return this.http
      .get(`${this.baseUrl}/trending/all/day?`, {
        params: this.params,
      })
      .pipe(
        tap(() => {
          this.pages += 1;
          this.charging = false;
        })
      );
  }
  // ?api_key=58d3fba38236457578d2c5eb8f45eb56&language=en-US&page=1&include_adult=false
  searchFilms(text: string): Observable<Film[]> {
    const params = { ...this.params, page: '1', query: text };
    return this.http
      .get<FilmsResponse>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }
  getDetailFilm(id: string) {
    return this.http
      .get<DetailResponse>(`${this.baseUrl}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((err) => of(null)));
  }
  getCreditsFilm(id: string): Observable<Cast[]> {
    return this.http
      .get<CreditsFilm>(`${this.baseUrl}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((result) => result.cast),
        catchError((err) => of([]))
      );
  }
}
