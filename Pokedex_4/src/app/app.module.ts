import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PokemonsModule} from './pokemons/pokemons.module';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PokemonsModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
