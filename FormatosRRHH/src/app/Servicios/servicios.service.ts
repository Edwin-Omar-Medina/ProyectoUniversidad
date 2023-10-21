import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  

  private Url = 'https://191.102.97.38:8080/'; //WebApi Public

 
  private UrlApiReportes = 'https://191.102.97.38:8081/'; //WebApiReportes Public
 
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
