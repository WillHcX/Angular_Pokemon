import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  limit = 20;
  @Output() monPokemon = new EventEmitter<number>();
  search: string;

  constructor(private pokemonsService: PokemonsService) { }

  getPokemons() {
    // this.heroes = this.heroService.getHeroes();
    this.pokemonsService.getPokemons().subscribe(myResult => this.pokemons = myResult.data);
  }

  ngOnInit() {
    this.getPokemons();
  }

  onScroll() {
   if  (this.search === '' || this.search == null ) {
      this.numPokemon += this.limit;
      this.pokemonsService.getPokemonsScroll(this.numPokemon, this.limit).subscribe(myResult => this.pokemons.push.apply(this.pokemons, myResult.data));
      this.limit += 20;
    }
  }

  searchPokemon(carSearch: string) {
    this.search = carSearch;

    if (this.search === '' || this.search == null ) {
      this.limit = 20;
      this.numPokemon = 0;
      this.getPokemons();
    } else {
      this.pokemonsService.searchPokemon(this.search, this.limit, this.numPokemon).subscribe(myResult => this.pokemons = myResult.data);
      this.numPokemon += 20;
    }

  }

  selectionPokemon(idPokemon: number)
  {
    this.monPokemon.emit(idPokemon);
  }


}
