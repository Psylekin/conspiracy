import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToTheVolksbadComponent } from './to-the-volksbad/to-the-volksbad.component';
import { BottleToTheMaximilianeumComponent } from './bottle-to-the-maximilianeum/bottle-to-the-maximilianeum.component';
import { PuzzleToTheMaxwerkComponent } from './puzzle-to-the-maxwerk/puzzle-to-the-maxwerk.component';
import { PerspectiveToTheFriedensengelComponent } from './perspective-to-the-friedensengel/perspective-to-the-friedensengel.component';
import { PlanetsToTheStuckComponent } from './planets-to-the-stuck/planets-to-the-stuck.component';
import { TrackingToTheBiergartenComponent } from './tracking-to-the-biergarten/tracking-to-the-biergarten.component';


const routes: Routes = [
  {path: 'ichkannlesen', component: WelcomeComponent},
  {path: 'passwort1', component: ToTheVolksbadComponent},
  {path: 'passwort2', component: BottleToTheMaximilianeumComponent},
  {path: 'passwort3', component: PuzzleToTheMaxwerkComponent},
  {path: 'passwort4', component: PerspectiveToTheFriedensengelComponent},
  {path: 'passwort5', component: PlanetsToTheStuckComponent},
  {path: 'passwort6', component: TrackingToTheBiergartenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
