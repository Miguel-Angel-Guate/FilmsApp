import { Component, HostListener, OnInit } from '@angular/core';
import { FilmsResponse } from 'src/app/interface/films-response';

import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public films: FilmsResponse[] = [];
  public coming: FilmsResponse[];

  //list some event like input or output
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const position =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const maxPosition =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (position > maxPosition) {
      if (this.filmService.charging) {
        return;
      }
      // console.log('call new service');
      this.filmService.getUpcomming().subscribe((resp) => {
        this.coming.push(...resp.results);
      });
    }
  }

  constructor(private filmService: FilmsService) {}
  ngOnInit(): void {
    this.filmService.getFilms().subscribe((result: any) => {
      this.films = result.results;
    });
    this.filmService.getUpcomming().subscribe((resultUpcomming) => {
      this.coming = resultUpcomming.results;
    });
  }
}
