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
//  this to do no refresch in forms in the project
import { FormsModule } from '@angular/forms';
import { PosterPipe } from './pipes/poster.pipe';
import { ShowActorsCreditsComponent } from './components/show-actors-credits/show-actors-credits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    SearchComponent,
    NavbarComponent,
    SlideshowComponent,
    FilmsPosterComponent,
    PosterPipe,
    ShowActorsCreditsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
