export class Pokemon {
    name: string = '';
    types!: [{
        slot: number;
        type: Type;
    }];
}

class Type{
    name: string = '';
    url: string = '';
}