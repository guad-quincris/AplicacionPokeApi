import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  pokemon: any[] = [];
  id: number;

  constructor( private route: ActivatedRoute,
              private pokemonService: PokemonsService) {
   }

  ngOnInit() {
  }

}
