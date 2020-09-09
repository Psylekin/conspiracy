import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToTheVolksbadComponent } from './to-the-volksbad/to-the-volksbad.component';
import { BottleToTheMaximilianeumComponent } from './bottle-to-the-maximilianeum/bottle-to-the-maximilianeum.component';
import { PuzzleToTheMaxwerkComponent } from './puzzle-to-the-maxwerk/puzzle-to-the-maxwerk.component';
import { PerspectiveToTheFriedensengelComponent } from './perspective-to-the-friedensengel/perspective-to-the-friedensengel.component';
import { PlanetsToTheStuckComponent } from './planets-to-the-stuck/planets-to-the-stuck.component';
import { TrackingToTheBiergartenComponent } from './tracking-to-the-biergarten/tracking-to-the-biergarten.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ToTheVolksbadComponent,
    BottleToTheMaximilianeumComponent,
    PuzzleToTheMaxwerkComponent,
    PerspectiveToTheFriedensengelComponent,
    PlanetsToTheStuckComponent,
    TrackingToTheBiergartenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
