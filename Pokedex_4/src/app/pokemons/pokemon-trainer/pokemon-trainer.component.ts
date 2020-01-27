import { Component, OnInit } from '@angular/core';
import {PokemonsService} from '../pokemons.service';
import {CookieService} from 'ngx-cookie-service';
import {token} from '../../models/token.models';
import {Location} from '@angular/common';


@Component({
  selector: 'app-pokemon-trainer',
  templateUrl: './pokemon-trainer.component.html',
  styleUrls: ['./pokemon-trainer.component.scss']
})
export class PokemonTrainerComponent implements OnInit {

  login: string;
  password: string;
  cookie: string;
  token: token;

  constructor(private pokemonsService: PokemonsService, private cookieservice: CookieService, private location: Location) {
  }

  ngOnInit() {
  }

  connexion(login: HTMLInputElement, password: HTMLInputElement) {
    this.login = login.value;
    this.password = password.value;
    if (this.login !== '' || this.password !== '') {
      this.pokemonsService.connexionUser(this.login, this.password).then(result =>
      {
        this.token = result;
        if (this.token !== null) {
          this.cookieservice.set('access_token', this.token.access_token);
          this.cookieservice.set('refresh_token', this.token.refresh_token);
          this.location.go('/pokedex');
          location.reload();
        } else {
          console.log('Erreur email ou mdp');
        }
      });

    }
  }

}
