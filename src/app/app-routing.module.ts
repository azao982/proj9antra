import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifiercoursComponent } from './modifiercours/modifiercours.component';
const routes: Routes = [
  { path:'Acceuil',title:"Acceuil" ,component: AcceuilComponent },
  { path:'Navbar',title:"Navbar" ,component: NavbarComponent },
  { path:'connexion',title:"connexion" ,component:ConnexionComponent },
  { path:'Listcours',title:"Listcours" ,component:ListCoursComponent },
  { path:'ajouter',title:"ajouter" ,component:AjouterComponent },
  {path: 'modifier/:id',title:"modifier", component:ModifiercoursComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  BrowserModule,

  ],
  exports: [RouterModule],
 
})
export class AppRoutingModule {
 }
