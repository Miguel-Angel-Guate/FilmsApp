import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { DetailResponse } from '../../interface/detail-response';
import { Location } from '@angular/common';
import { Cast } from '../../interface/creditsFilm';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  public filmDetail: DetailResponse;
  public cast: Cast[] = [];

  constructor(
    private activedRoute: ActivatedRoute,
    private filmService: FilmsService,
    //give where i´m and come back the last time where i stay
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params.id;

    combineLatest([
      this.filmService.getDetailFilm(id),
      this.filmService.getCreditsFilm(id),
    ]).subscribe(([detailFilm, creditsFilm]) => {
      if (!detailFilm) {
        this.router.navigateByUrl('/home');
        return;
      }
      // console.log('the detail', detail);
      this.filmDetail = detailFilm;
      this.cast = creditsFilm.filter((actor) => actor.profile_path !== null);
    });

    // this.filmService.getDetailFilm(id).subscribe((detail) => {
    //   if (!detail) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   // console.log('the detail', detail);
    //   this.filmDetail = detail;
    // });
    // this.filmService.getCreditsFilm(id).subscribe((credits) => {
    //   // console.log(credits);
    //   this.cast = credits.filter((actor) => actor.profile_path !== null);
    // });
    // console.log(this.cast);
  }
  backButton() {
    this.location.back();
  }
}
