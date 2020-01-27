import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon.models';
import {PokemonsService} from '../pokemons.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {


  pokemons: Pokemon [];
  numPokemon = 0;
  limit = 10;

  constructor(private pokemonsService: PokemonsService) { }

  getPokemons() {
    // this.heroes = this.heroService.getHeroes();
    this.pokemonsService.getPokemons().subscribe(myResult => this.pokemons = myResult.data);
  }

  ngOnInit() {
    this.getPokemons();
  }


  onScroll() {
    // add another 20 items
    if (this.limit < 150) {
      this.numPokemon += this.limit;
      this.pokemonsService.getPokemonsScroll(this.numPokemon, this.limit).subscribe(myResult => this.pokemons.push.apply(this.pokemons, myResult.data));
      this.limit += 10;
      console.log(this.numPokemon, this.limit);
      console.log(this.pokemons);
    }

  }

}
