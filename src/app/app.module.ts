import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { CommonModule } from '@angular/common';
import { FilmsPosterComponent } from './components/films-poster/films-poster.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    SearchComponent,
    NavbarComponent,
    SlideshowComponent,
    FilmsPosterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
