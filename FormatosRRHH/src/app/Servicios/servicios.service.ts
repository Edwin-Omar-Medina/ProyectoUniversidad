import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  

  private Url = 'url de api'; //WebApi Public

  private UrlApiReportes = 'url de la pai reportes'; //WebApiReportes Public
 
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




