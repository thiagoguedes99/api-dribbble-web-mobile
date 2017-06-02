import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CardHomeComponent } from './shared/card-home/card-home.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "app/app.routing.module";

import { DribbbleServiceService } from "app/providers/dribbble-service.service";
import { PersonalCardComponent } from './shared/personal-card/personal-card.component';
import { SimpleCardComponent } from './shared/simple-card/simple-card.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHomeComponent,
    HomeComponent,
    PersonalCardComponent,
    SimpleCardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
  ],
  providers: [DribbbleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
