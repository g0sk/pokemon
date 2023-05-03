import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  query: string = 'pikachu';
  pokemon: any = null;

  constructor(private pokemonService: PokemonService) {}

  searchPokemon() {
    this.pokemonService.getPokemon(this.query).subscribe((data: any) => {
      this.pokemon = data;
    });
  }
  setQuery(query: string) {
    this.query = query;
  }
}
