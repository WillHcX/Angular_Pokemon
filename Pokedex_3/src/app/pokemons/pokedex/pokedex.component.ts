import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  idPokemonPokedex: number;
  constructor() { }

  ngOnInit() {
  }

  onPokemonSelect(id: number) {
    this.idPokemonPokedex = id;
  }
}
