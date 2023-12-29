import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifiercoursComponent } from './modifiercours/modifiercours.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NavbarComponent,
    ConnexionComponent,
    ListCoursComponent,
    AjouterComponent,
    ModifiercoursComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
