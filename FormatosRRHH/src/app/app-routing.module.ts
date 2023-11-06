import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se importan los componentes

import { HomeComponent } from './componentes/home/home.component';

//Importacion de rutas para PERMISOS
import { IPermisosComponent } from './componentes/Permisos/ipermisos/ipermisos.component';

//Importacion de rutas para VACACIONES
import { IVacacionesComponent } from './componentes/Vacaciones/ivacaciones/ivacaciones.component';
import { VVacacionesComponent } from './componentes/Vacaciones/vvacaciones/vvacaciones.component';

//Importacion de rutas para COMPENSATORIOS
import { ICompensatorioComponent } from './componentes/Compensatorio/icompensatorio/icompensatorio.component';
import { VCompensatorioComponent } from './componentes/Compensatorio/vcompensatorio/vcompensatorio.component';

//Importacion de rutas para CERTIFICADOS
import { ICertificadosComponent } from './componentes/Certificados/icertificados/icertificados.component';
import { VCertificadosComponent } from './componentes/Certificados/vcertificados/vcertificados.component';

const routes: Routes = [

  //se agregan las rutas de redireccion de la pagina
  {path : '', component:HomeComponent }, 
  {path : 'Home', component:HomeComponent }, 
  
  //Rutas de permisos Ingreso de datos y visualizador de formato con datos
  {path : 'ipermisos', component:IPermisosComponent },


  //Rutas de vacaciones Ingreso de datos y visualizador de formato con datos
  {path : 'ivacaciones', component:IVacacionesComponent  }, 
  {path : 'vvacaciones', component: VVacacionesComponent }, 

  //Rutas de compensatorios Ingreso de datos y visualizador de formato con datos
  {path : 'icompensatorio', component:ICompensatorioComponent  }, 
  {path : 'vcompensatorio', component: VCompensatorioComponent }, 

  //Rutas de certificados Ingreso de datos y visualizador de formato con datos
  {path : 'icertificados', component:ICertificadosComponent  }, 
  {path : 'vcertificados', component: VCertificadosComponent }, 


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
