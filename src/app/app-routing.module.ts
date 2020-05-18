import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelosComponent } from './modelos/modelos.component';
import { MapaComponent } from './mapa/mapa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/principal' },

  { path: 'principal', component: PrincipalComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
