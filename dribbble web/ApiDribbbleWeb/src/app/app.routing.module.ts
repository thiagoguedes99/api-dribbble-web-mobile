import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from "app/home/home.component";
import { PersonalCardComponent } from "app/shared/personal-card/personal-card.component";
import { SimpleCardComponent } from "app/shared/simple-card/simple-card.component";
import { ProfileComponent } from "app/profile/profile.component";
import { SimpleImageComponent } from "app/shared/simple-image/simple-image.component";



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'personal', component: PersonalCardComponent },
    {path: 'simple', component: SimpleCardComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'image', component: SimpleImageComponent},];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }