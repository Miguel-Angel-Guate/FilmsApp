import { Component, Input, OnInit } from '@angular/core';
import { FilmsResponse } from 'src/app/interface/films-response';
import { FilmsService } from 'src/app/services/films.service';
import { StarRatingComponent } from 'ng-starrating';
import { Film } from '../../interface/films-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-poster',
  templateUrl: './films-poster.component.html',
  styleUrls: ['./films-poster.component.css'],
})
export class FilmsPosterComponent implements OnInit {
  // @Input() films: any;
  @Input() coming: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //  this.filmService.getUpcomming().subscribe((result) => {
    // //   console.log('look again', result);
    // });
  }
  clicOverFilmPoster(item) {
    // console.log('the film choosed', item);
    this.router.navigate(['/film', item.id]);
  }
}
