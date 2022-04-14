import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


/* 
import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/Models/pokemon-details.model';
import { PokemonsType } from 'src/app/Models/pokemons-type';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {

  @Input('pokemonDetails') pokemonDetails: PokemonDetails = new PokemonDetails;

  pokemonsType: PokemonsType[] = [];

  constructor(private pokeService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeService.getPokemonsByType(this.pokemonDetails.type.name).subscribe((pokemonsResult: any) => {
      this.pokemons = pokemonsResult;
      this.pokemonsList = pokemonsResult;
      this.pokemonDetails = pokemonsResult;
  });
  }

}

*/