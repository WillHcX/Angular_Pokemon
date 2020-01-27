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
  limit = 20;
  offset = 20;
  numPokemonSearch = 0;
  @Output() monPokemon = new EventEmitter<number>();
  search: string;

  constructor(private pokemonsService: PokemonsService) { }

  getPokemons() {
    this.pokemonsService.getPokemons().subscribe(myResult => this.pokemons = myResult.data);
  }

  ngOnInit() {
    this.getPokemons();
  }

  onScroll() {
    if (this.search === '' || this.search == null) {
      this.pokemonsService.getPokemonsScroll(this.offset, this.limit).subscribe(myResult => this.pokemons.push.apply(this.pokemons, myResult.data));
      this.offset += this.limit;
    } else {
      this.numPokemonSearch += this.limit;
      this.pokemonsService.searchPokemons(this.search, this.numPokemonSearch, this.limit).subscribe(myResult => this.pokemons.push.apply(this.pokemons, myResult.data));
    }
  }

  searchPokemon(carSearch: string) {

    this.search = carSearch;
    if (carSearch === '' || carSearch == null ) {
      this.offset = 20;
      this.getPokemons();
    } else {
      this.pokemonsService.searchPokemons(carSearch, 0, this.limit).subscribe(myResult => this.pokemons = myResult.data);
    }
  }

  selectionPokemon(idPokemon: number)
  {
    this.monPokemon.emit(idPokemon);
  }


}
