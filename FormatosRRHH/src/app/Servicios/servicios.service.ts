import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  

  private Url = 'http://localhost/RRHH_WEB'; //WebApi Public

  private UrlApiReportes = 'http://localhost/RRHH_WEB/'; //WebApiReportes Public
 
  private version: number=1.27 ;

  constructor() { }

  getVersion(){
    return this.version;
  }
  
 getDireccion() {
   return this.Url;
 }

 getDireccionReportes() {
   return this.UrlApiReportes;
 }

 
}




