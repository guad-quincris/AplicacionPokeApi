import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

    poke: any[] = [];


  constructor(private http: HttpClient) {
    console.log('servicio Cargado');
   }

   getDataPokemon() {
   return this.http.get('https://pokeapi.co/api/v2/pokemon-form');
   }

   getDetailPokemon(url: string) {
     return this.http.get(url);
   }

   getImagenPokemon(url: string) {
    return this.http.get(url);
  }
  getPokemon( id: string) {
    return this.http.get(id);
  }

}
