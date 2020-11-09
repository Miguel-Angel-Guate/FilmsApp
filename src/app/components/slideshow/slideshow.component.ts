import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() films: any;

  constructor() {}
  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
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
  }

  ngOnInit(): void {
    console.log('look the movies in slide', this.films);
  }
}
