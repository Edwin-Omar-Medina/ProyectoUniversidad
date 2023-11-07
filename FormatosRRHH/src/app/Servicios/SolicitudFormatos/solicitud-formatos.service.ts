import { Injectable } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder  } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatosEnv } from 'src/app/Clases/DatosEnv';
import { data } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class SolicitudFormatosService {
  
  fechaSolicitud:string ='';
  numDocEmpleado:number = 0;
  tipoFormato:number =0;
  tipoVacacionesoPermisos:string ='';
  Remunerado:number =0;
  fechaI:string ='';
  horaI:string ='';
  fechaF:string ='';
  horaF:string ='';
  Motivo:string ='';
  fechaAdicion_I:string ='';
  horaAdicion_I:string ='';
  fechaAdicion_F:string ='';
  horaAdicion_F :string ='';
  tipoCertificado :string ='';

  constructor(public base:ServiciosService, public  http:HttpClient ) { 
    
  }

  GetForm_Permisos(informacion:FormGroup) {
    let direccion:string;
    console.log("Enviado desde el servicio 22  xd \m"+ informacion.value);
   
    
      this.fechaSolicitud = informacion.get('f_fechaSolicitud')?.value;
      this.numDocEmpleado = informacion.get('f_numDocEmpleado')?.value;
      this.tipoFormato =informacion.get('f_tipoFormato')?.value;
      this.tipoVacacionesoPermisos =informacion.get('f_tipoVacacionesoPermisos')?.value;
      this.Remunerado = informacion.get('I_Remunerado')?.value;
      this.fechaI =informacion.get('f_fechaI')?.value;
      this.horaI  =informacion.get('f_horaI')?.value;
      this.fechaF =informacion.get('f_fechaF')?.value;
      this.horaF =informacion.get('f_horaF')?.value;
      this.Motivo =informacion.get('f_Motivo')?.value;
      this.fechaAdicion_I =informacion.get('f_fechaAdicion_I')?.value;
      this.horaAdicion_I =informacion.get('f_horaAdicion_I')?.value;
      this.fechaAdicion_F =informacion.get('f_fechaAdicion_F')?.value;
      this.horaAdicion_F =informacion.get('f_horaAdicion_F')?.value;
      this.tipoCertificado =informacion.get('f_tipoCertificado')?.value;
    /*string fechaSolicitud, int numDocEmpleado, int tipoFormato, string tipoVacacionesoPermisos, 
    int Remunerado, string fechaI, string horaI, string fechaF, string horaF, string Motivo,
     string fechaAdicion_I, string horaAdicion_I, string fechaAdicion_F, string horaAdicion_F, string tipoCertificado*/

      console.log(this.fechaSolicitud);
      console.log(this.numDocEmpleado);
      console.log(this.tipoFormato);
      console.log(this.tipoVacacionesoPermisos);
      console.log(this.Remunerado);
      console.log(this.fechaI);
      console.log(this.horaI);
      console.log(this.fechaF);
      console.log(this.horaF);
      console.log(this.Motivo);
      console.log(this.fechaAdicion_I);
      console.log(this.horaAdicion_I);
      console.log(this.fechaAdicion_F);
      console.log(this.horaAdicion_F);
      console.log(this.tipoCertificado);
    

    direccion=this.base.getDireccionReportes() + 'api/llamadaReportes?fechaSolicitud='+this.fechaSolicitud+'&numDocEmpleado='+this.numDocEmpleado
      +'&tipoFormato='+this.tipoFormato+'&tipoVacacionesoPermisos='+this.tipoVacacionesoPermisos+'&Remunerado='+this.Remunerado+'&fechaI='+this.fechaI
      +'&horaI='+this.horaI+'&fechaF='+this.fechaF+'&horaF='+this.horaF+'&Motivo='+this.Motivo+'&fechaAdicion_I='+this.fechaAdicion_I+'&horaAdicion_I='+this.horaAdicion_I
      +'&fechaAdicion_F='+this.fechaAdicion_F+'&horaAdicion_F='+this.horaAdicion_F+'&tipoCertificado='+this.tipoCertificado;
    
      return this.http.get<string>(direccion);
  }


  ValidarDoc(numDocEmpleado:number) {
    let url:string;
    
    url=this.base.getDireccionReportes() + 'api/ValidarDOC?&numDocEmpleado='+numDocEmpleado;
   
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (data: any) => {
          resolve(data); // Devuelve la respuesta de la API
        },
        (error) => {
          reject(error); // Rechaza la Promesa en caso de error
        }
      );
    });
  }
}


