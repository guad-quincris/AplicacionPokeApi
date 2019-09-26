import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  poke: any[] = [];
  poke_list: any[] = [];
  detailPoke: any;
  url: string;

  constructor(private pokemonService: PokemonsService) {

    console.log('constructor de pokedex');

    this.pokemonService.getDataPokemon()
      .subscribe( (data: any)  => {

       this.poke = data['results'];
       this.poke.forEach(pokeX => {

            this.pokemonService.getDetailPokemon(pokeX.url)
                 .subscribe ((pokeDetail: any)   => {
                 this.detailPoke = pokeDetail;
                  console.log(pokeDetail);
                 this.poke_list.push(pokeDetail);
             });
       });

       console.log(data);

    });

   }

  ngOnInit() {
  }

}
