export class PokemonsType{
    damage_relations: any = {};
    game_indices: any[] = [];
    generation: any = {};
    id: number = 0;
    move_damage_class: any = {};
    moves: any[] = [];
    name: string = '';
    names: any[] = [];
    past_damage_relations: any[] = [];
    pokemon!: [{
        pokemon: Pokemon;
        slot: number;
    }];
}

class Pokemon{
    name: string = '';
    url: string = '';
}