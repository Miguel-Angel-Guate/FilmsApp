import { Component, Input, OnInit } from '@angular/core';
import { FilmsResponse } from 'src/app/interface/films-response';
import { FilmsService } from 'src/app/services/films.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-films-poster',
  templateUrl: './films-poster.component.html',
  styleUrls: ['./films-poster.component.css'],
})
export class FilmsPosterComponent implements OnInit {
  // @Input() films: any;
  @Input() coming: any;

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    //  this.filmService.getUpcomming().subscribe((result) => {
    // //   console.log('look again', result);
    // });
  }
}
