import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/interface/films-response';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public text: string = '';
  public coming: Film[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.text = params.text;
      // console.log(params.text);
      //to do, call the service
      this.filmService.searchFilms(params.text).subscribe((films) => {
        this.coming = films;
      });
    });
  }
}
