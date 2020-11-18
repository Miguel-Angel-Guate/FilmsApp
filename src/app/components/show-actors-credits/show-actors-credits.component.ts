import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interface/creditsFilm';

@Component({
  selector: 'app-show-actors-credits',
  templateUrl: './show-actors-credits.component.html',
  styleUrls: ['./show-actors-credits.component.css'],
})
export class ShowActorsCreditsComponent implements OnInit, AfterViewInit {
  //rename to the call where from the information
  @Input() cast: Cast[];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.cast);
  }
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 6.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }
}
