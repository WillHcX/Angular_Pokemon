import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemons/pokemon-details/pokemon-details.component';


const routes: Routes = [
  {path: 'pokemon', component: PokemonListComponent},
  {path: 'details/:id', component: PokemonDetailsComponent},
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
