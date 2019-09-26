import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';


const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pokemones', component: PokemonesComponent},
  { path: 'pokemon/:id', component: PokemonComponent},
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
