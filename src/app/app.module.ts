import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { TeamsListingComponent } from './components/teams/teams-listing/teams-listing.component';
import { CommonModule } from '@angular/common';
import { TeamFormComponent } from './components/teams/team-form/team-form.component';
import { PlayersListingComponent } from './components/players/players-listing/players-listing.component';
import { PlayerFormComponent } from './components/players/player-form/player-form.component';
import { TeamDetailsComponent } from './components/teams/team-details/team-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './core/services/token.interceptor';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TeamsListingComponent,
    TeamFormComponent,
    PlayersListingComponent,
    PlayerFormComponent,
    TeamDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
