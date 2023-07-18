import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
 
  title = 'FormatosRRHH';
  
  constructor(private modalService: NgbModal, private location: Location ) {
    const currentUrl = this.location.path();
    console.log(currentUrl);
  }

  


  public open(modal: any): void {

    this.modalService.open(modal);

  }

  
  
  //opciones para mostrar el titulo 
  imprimirTitulos(){
    const currentUrl = this.location.path();
    //console.log(currentUrl);
    var titulos="";

    switch(currentUrl){
      case "/ipermisos":
        titulos='SOLICITUD DE PERMISO';
        break;
      case "/ivacaciones":
        titulos='SOLICITUD DE VACACIONES';
        break;
      case "/icompensatorio":
        titulos='SOLICITUD DE COMPENSATORIO';
        break;
      case "/icertificados":
        titulos='SOLICITUD DE CERTIFICADOS';
        break;
      default:
        titulos=' HOME';
        break;
    }

    return titulos;
  }

}


