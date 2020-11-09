import { Component, OnInit } from '@angular/core';
import { FilmsResponse } from 'src/app/interface/films-response';

import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public films: FilmsResponse[] = [];

  constructor(private filmService: FilmsService) {}
  ngOnInit(): void {
    this.filmService.getFilms().subscribe((result: any) => {
      this.films = result.results;
    });
  }
}
