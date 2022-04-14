import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokelistComponent } from './pokelist/pokelist.component';

const routes: Routes = [
    { path: 'Pokemons', component: PokelistComponent },
    { path: '404', component: NotFoundComponent},
    { path: '', redirectTo: 'Pokemons', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
