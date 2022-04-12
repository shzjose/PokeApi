import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
    { path: 'Pokemons', component: PokelistComponent },
    { path: 'Pokemon/:id', component: PokemonDetailsComponent},
    { path: '404', component: NotFoundComponent},
    { path: '', redirectTo: 'Pokemons', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
