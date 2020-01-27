import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PokedexComponent} from './pokedex/pokedex.component';
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    PokedexComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailsComponent,
    PokedexComponent
  ]
})
export class PokemonsModule { }
