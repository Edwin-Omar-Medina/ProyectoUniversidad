import { Injectable } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder  } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class SolicitudFormatosService {
  
  

  constructor(public base:ServiciosService, public  http:HttpClient ) { 
    
  }

  GetForm_Permisos(informacion:FormGroup) {
    let direccion:string;
    console.log("Enviado desde el servicio 22  xd \m"+ informacion.value);
    //informacion = informacion;}
    //this.formInfo = informacion
    
      const fechaSolicitud = informacion.get('f_fechaSolicitud')?.value;
      const numDocEmpleado = parseInt(informacion.get('f_numDocEmpleado')?.value);
      const tipoFormato =parseInt(informacion.get('f_tipoFormato')?.value);
      const tipoVacacionesoPermisos =informacion.get('f_tipoVacacionesoPermisos')?.value;
      const Remunerado =informacion.get('f_Remunerado')?.value;
      const fechaI =informacion.get('f_fechaI')?.value;
      const horaI  =informacion.get('f_horaI')?.value;
      const fechaF =informacion.get('f_fechaF')?.value;
      const horaF =informacion.get('f_horaF')?.value;
      const Motivo =informacion.get('f_Motivo')?.value;
      const fechaAdicion_I =informacion.get('f_fechaAdicion_I')?.value;
      const horaAdicion_I =informacion.get('f_horaAdicion_I')?.value;
      const fechaAdicion_F =informacion.get('f_fechaAdicion_F')?.value;
      const horaAdicion_F =informacion.get('f_horaAdicion_F')?.value;
      const tipoCertificado =informacion.get('f_tipoCertificado')?.value;
    /*string fechaSolicitud, int numDocEmpleado, int tipoFormato, string tipoVacacionesoPermisos, 
    int Remunerado, string fechaI, string horaI, string fechaF, string horaF, string Motivo,
     string fechaAdicion_I, string horaAdicion_I, string fechaAdicion_F, string horaAdicion_F, string tipoCertificado*/

      console.log(fechaSolicitud);
      console.log(numDocEmpleado);
      console.log(tipoFormato);
      console.log(tipoVacacionesoPermisos);
      console.log(Remunerado);
      console.log(fechaI);
      console.log(horaI);
      console.log(fechaF);
      console.log(horaF);
      console.log(Motivo);
      console.log(fechaAdicion_I);
      console.log(horaAdicion_I);
      console.log(fechaAdicion_F);
      console.log(horaAdicion_F);
      console.log(tipoCertificado);

    direccion=this.base.getDireccionReportes() + 'api/llamadaReportes?fechaSolicitud='+fechaSolicitud+'&numDocEmpleado='+numDocEmpleado
      +'&tipoFormato='+tipoFormato+'&tipoVacacionesoPermisos='+tipoVacacionesoPermisos+'&Remunerado='+1+'&fechaI='+fechaI
      +'&horaI='+horaI+'&fechaF='+fechaF+'&horaF='+horaF+'&Motivo='+Motivo+'&fechaAdicion_I='+fechaAdicion_I+'&horaAdicion_I='+horaAdicion_I
      +'&fechaAdicion_F='+fechaAdicion_F+'&horaAdicion_F='+horaAdicion_F+'&tipoCertificado='+tipoCertificado;
    
    //return  this.http.get<string>(direccion);
    //direccion=this.base.getDireccionReportes() + 'ingrese url de la api?';
    return this.http.get<string>(direccion);
   }
}


