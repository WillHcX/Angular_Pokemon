import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Pokemon} from '../../models/pokemon.models';
import {ActivatedRoute} from '@angular/router';
import {PokemonsService} from '../pokemons.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnChanges {

  id: number;
  pokemon: Pokemon;
  @Input() idPokemon: number;
  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService, private location: Location) { }

  playaudio(input: any) {
    input.play();
  }
  goBack() {
    this.location.back();
  }

  getPokemon(id: number) {
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.idPokemon);
    if (this.idPokemon !== undefined) {
      this.getPokemon(this.idPokemon);
    } else { this.getPokemon(1); }

  }

  ngOnInit(): void {
  }

}
