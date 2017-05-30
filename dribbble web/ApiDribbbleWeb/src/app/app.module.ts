import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CardHomeComponent } from './util-components/card-home/card-home.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "app/app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CardHomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
