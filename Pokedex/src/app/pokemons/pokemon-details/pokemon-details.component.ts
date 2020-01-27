import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon.models';
import {ActivatedRoute} from '@angular/router';
import {PokemonsService} from '../pokemons.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  id: number;
  @Input() pokemon: Pokemon;
  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService, private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getPokemon(this.id).subscribe(pokemon => this.pokemon = pokemon);
  }
  playaudio(input: any){
    input.play();
  }
  goBack() {
    this.location.back();
  }

}
