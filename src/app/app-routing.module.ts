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
  {path: '', component: WelcomeComponent},
  {path: 'ichkannlesen', component: SearchGasteigComponent},
  {path: 'Ichkannlesen', component: SearchGasteigComponent},
  {path: 'katzenhirn', component: ToTheVolksbadComponent},
  {path: 'Katzenhirn', component: ToTheVolksbadComponent},
  {path: 'illuminaten', component: BottleToTheMaximilianeumComponent},
  {path: 'Illuminaten', component: BottleToTheMaximilianeumComponent},
  {path: 'illuminat', component: BottleToTheMaximilianeumComponent},
  {path: 'Illuminat', component: BottleToTheMaximilianeumComponent},
  {path: 'illuminati', component: BottleToTheMaximilianeumComponent},
  {path: 'Illuminati', component: BottleToTheMaximilianeumComponent},
  {path: 'sonnenstrahlen', component: PuzzleToTheMaxwerkComponent},
  {path: 'Sonnenstrahlen', component: PuzzleToTheMaxwerkComponent},
  {path: 'sonnenstrahl', component: PuzzleToTheMaxwerkComponent},
  {path: 'Sonnenstrahl', component: PuzzleToTheMaxwerkComponent},
  {path: 'sonne', component: PuzzleToTheMaxwerkComponent},
  {path: 'Sonne', component: PuzzleToTheMaxwerkComponent},
  {path: 'perspektive', component: PerspectiveToTheFriedensengelComponent},
  {path: 'Perspektive', component: PerspectiveToTheFriedensengelComponent},
  {path: 'friedensengel', component: PerspectiveToTheFriedensengelComponent},
  {path: 'Friedensengel', component: PerspectiveToTheFriedensengelComponent},
  {path: 'kommtzurvillastuck', component: PlanetsToTheStuckComponent},
  {path: 'Kommtzurvillastuck', component: PlanetsToTheStuckComponent},
  {path: 'villastuck', component: PlanetsToTheStuckComponent},
  {path: 'Villastuck', component: PlanetsToTheStuckComponent},
  {path: '3', component: TrackingToTheBiergartenComponent},
  {path: 'E', component: TrackingToTheBiergartenComponent},
  {path: 'e', component: TrackingToTheBiergartenComponent},
  {path: '**', component: WrongComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
