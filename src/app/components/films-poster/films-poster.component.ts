import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-films-poster',
  templateUrl: './films-poster.component.html',
  styleUrls: ['./films-poster.component.css'],
})
export class FilmsPosterComponent implements OnInit, AfterViewInit {
  @Input() coming: any;
  // public coming: any;
  public mySwiper: Swiper;

  constructor() {}
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
    // mySwiper.slideNext();
  }

  ngOnInit(): void {
    // this.filmService.getUpcomming().subscribe((resultUpcomming: any) => {
    //   this.coming = resultUpcomming.results;
    //   console.log('look the popular', this.coming);
    // });
  }
  slideNextt() {
    this.mySwiper.slideNext();
  }
  slidePrevv() {
    this.mySwiper.slidePrev();
  }
}
