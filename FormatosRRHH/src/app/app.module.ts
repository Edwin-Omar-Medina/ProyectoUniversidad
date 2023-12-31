import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; //libreria para trabajar con formularios
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; //para ahcer peticiones


import { HomeComponent } from './componentes/home/home.component';
import { IVacacionesComponent } from './componentes/Vacaciones/ivacaciones/ivacaciones.component';
import { IPermisosComponent } from './componentes/Permisos/ipermisos/ipermisos.component';

import { ICertificadosComponent } from './componentes/Certificados/icertificados/icertificados.component';
import { ICompensatorioComponent } from './componentes/Compensatorio/icompensatorio/icompensatorio.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IVacacionesComponent,
    IPermisosComponent,
    ICertificadosComponent,
    ICompensatorioComponent,
    
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
