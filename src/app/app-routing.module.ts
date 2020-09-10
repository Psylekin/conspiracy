import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToTheVolksbadComponent } from './to-the-volksbad/to-the-volksbad.component';
import { BottleToTheMaximilianeumComponent } from './bottle-to-the-maximilianeum/bottle-to-the-maximilianeum.component';
import { PuzzleToTheMaxwerkComponent } from './puzzle-to-the-maxwerk/puzzle-to-the-maxwerk.component';
import { PerspectiveToTheFriedensengelComponent } from './perspective-to-the-friedensengel/perspective-to-the-friedensengel.component';
import { PlanetsToTheStuckComponent } from './planets-to-the-stuck/planets-to-the-stuck.component';
import { TrackingToTheBiergartenComponent } from './tracking-to-the-biergarten/tracking-to-the-biergarten.component';
import { SearchGasteigComponent } from './search-gasteig/search-gasteig.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WrongComponent } from './wrong/wrong.component';


const routes: Routes = [
  {path: 'Sanny du würdest doch nie den Quellcode ausnutzen,oder?', component: HättestDuGerneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
