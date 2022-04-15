import { Component, OnInit, Type } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonDetails } from '../Models/pokemon-details.model';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
    selector: 'app-pokelist',
    templateUrl: './pokelist.component.html',
    styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

    pokemons: Pokemon[] = [];
    pokemonDetails: PokemonDetails[] = [];
    pokemonsList: Pokemon[] = [];
    pokemonVariable: string = 'Pikachu';

    constructor(private pokeApi: PokeapiService) { }

    ngOnInit(): void {
        this.pokeApi.GetPokemonList().subscribe((pokemonsResult: any) => {
            this.pokemons = pokemonsResult;
            this.pokemonsList = pokemonsResult;
            this.pokemonDetails = pokemonsResult;
        });
    }

    filterPokemons(pokemonString: string): void {
        this.pokemonsList = this.pokemons.filter(pokemon => pokemon.name.includes(pokemonString.toLowerCase()));
    }

    filterPokemonsByType(pokemonString: string): void {
        this.pokemonsList = this.pokemons.filter(pokemon => pokemon.types.some(pType => pType.type.name.includes(pokemonString.toLowerCase())));
    }
    
}


