import {Injectable, Input} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {log} from 'util';
import {Pokemon} from '../models/pokemon.models';
import {MessageService} from './message.service';
import {DonPokemon} from '../models/donPokemon.models';
import {token} from '../models/token.models';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private urlpokemon = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';

  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getPokemonsScroll(offset: number, limit: number): Observable<DonPokemon<Pokemon>> {
    return this.httpClient.get<DonPokemon<Pokemon>>(this.urlpokemon + '?offset=' + offset + '&limit=' + limit).pipe(tap(_ => this.log('Fetched pokemons')),
      catchError(this.handleError<DonPokemon<Pokemon>>('getPokemons', ))
    );
  }

  getPokemons(): Observable<DonPokemon<Pokemon>> {
    return this.httpClient.get<DonPokemon<Pokemon>>(this.urlpokemon + '?offset=0&limit=20').pipe(tap(_ => this.log('Fetched pokemons')),
      catchError(this.handleError<DonPokemon<Pokemon>>('getPokemons', ))
    );
  }
  private log(message: string) {
      this.messageService.add(`PokemonService: ${message}`);
    }

    getPokemon(id: number): Observable<Pokemon> {
    const url = this.urlpokemon + '/' + id;
    return this.httpClient.get<Pokemon>(url).pipe(tap( _ => this.log('fetched pokemon id=${id}' )),
      catchError(this.handleError<Pokemon>('get pokemon id=${id}')));
  }

  searchPokemons(search: string, offset: number, limit: number): Observable<DonPokemon<Pokemon>> {
    const url = this.urlpokemon + '?search=' + search + '&offset=' + offset + '&limit=' + limit;
    return this.httpClient.get<DonPokemon<Pokemon>>(url).pipe(tap(_ => this.log('Fetched pokemons')),
      catchError(this.handleError<DonPokemon<Pokemon>>('getPokemons')));
  }

  connexionUser(email: string, password: string): Promise<token>
  {
    return this.httpClient.post<token>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io' + '/auth/login', {email, password}).pipe(
      tap(_ => this.log('connexion')),
      catchError(this.handleError<token>('connexion'))).toPromise();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
