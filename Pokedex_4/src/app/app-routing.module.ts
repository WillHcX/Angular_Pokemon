import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemons/pokemon-details/pokemon-details.component';
import {PokedexComponent} from './pokemons/pokedex/pokedex.component';
import {PokemonTrainerComponent} from './pokemons/pokemon-trainer/pokemon-trainer.component';


const routes: Routes = [
  {path: 'pokemon', component: PokemonListComponent},
  {path: 'details/:id', component: PokemonDetailsComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'connexion', component: PokemonTrainerComponent},
  {path: '', redirectTo: '/connexion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
