import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from "app/home/home.component";
import { PersonalCardComponent } from "app/shared/personal-card/personal-card.component";
import { SimpleCardComponent } from "app/shared/simple-card/simple-card.component";
import { ProfileComponent } from "app/profile/profile.component";
import { SimpleImageComponent } from "app/shared/simple-image/simple-image.component";
import { PersonalCardHorizontalComponent } from "app/shared/personal-card-horizontal/personal-card-horizontal.component";
import { DetailShotsComponent } from "app/detail-shots/detail-shots.component";



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    {path: 'detail', component: DetailShotsComponent},
    {path: 'profile/:id', component: ProfileComponent},
    { path: 'personal', component: PersonalCardComponent },
    {path: 'simple', component: SimpleCardComponent},
    {path: 'image', component: SimpleImageComponent},
    {path: 'coments', component: PersonalCardHorizontalComponent},];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }