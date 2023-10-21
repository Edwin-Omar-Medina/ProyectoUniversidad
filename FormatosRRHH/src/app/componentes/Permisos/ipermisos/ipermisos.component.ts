
import { Component, ElementRef, OnInit } from '@angular/core'; 
import { FormGroup,FormBuilder  } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { HttpClient } from '@angular/common/http';



@Component({
  
  selector: 'app-ipermisos',
  templateUrl: './ipermisos.component.html',
  styleUrls: ['./ipermisos.component.css'],

})


export class IPermisosComponent implements OnInit{
  
  formularioPermisos:FormGroup;

   
 

  //se define el constructor con el elementRef que nos permite poder usar funcionalidades para interactuar con html
  constructor(private elementRef: ElementRef, public formBuilder:FormBuilder, public base:ServiciosService, private http:HttpClient) {
        
    //this.formularioPermisos = new FormGroup;
      //se recupera la informacion de el formulario
      this.formularioPermisos = this.formBuilder.group({

        tipoDocumento:[''],
        numeroDocumento:[''],
        tipoPermiso:[''], 
        flexRadioDefault:[''],
        autorizacion:[''], 
        descPermiso:[''],
        fechaSalida:[''],
        horaSalida:[''],
        fechaLlegada:[''],
        horaLlegada:[''],
       
      
        });
  }

  ngOnInit(): void { }


  //Funcion para validar el radiobtn que se esta seleccionando
  validar_rbt(): void {
    let valorBtn = this.formularioPermisos.get('flexRadioDefault')?.value;
    let opcionTexto_1="No autorizo que se realice ningun descuento";
    let opcionTexto_2="Autorizo que se me realice el respectivo descuento por el tiempo ausente de mis labores";
    const mostrartexto = this.elementRef.nativeElement.querySelector('#textoMostrar');

    if (valorBtn=== 'remunerado') {
      //console.log('Opción remunerado seleccionada xd xd xd xd');
      mostrartexto.textContent = opcionTexto_1;
      //this.formularioPermisos.get('flexRadioDefault')?.setValue('nuevoValor');
      this.formularioPermisos.get('autorizacion')?.setValue(opcionTexto_1);


    } else if (valorBtn === 'no remunerado') {
      //console.log('Opción no remunerado seleccionada');
      mostrartexto.textContent = opcionTexto_2;
      this.formularioPermisos.get('autorizacion')?.setValue(opcionTexto_2);
    }
  }

 

  enviarPermiso():any{
    console.log("Enviado xd");
    console.log(this.formularioPermisos.value);
  }

  //creacion de la funcion que llama a el inform
  today: number = Date.now();
  pipe = new DatePipe('en-US');
  transformDate(date: any) {
    
    return this.pipe.transform(date, 'dd/MM/YYYY');
  }

  fechaSolicitud = this.transformDate(Date.now());

  //Codigo Servicio que lleva el metodo al componente

  GetReportePorCumplimiento(Mes:number,Ano:number){
    let direccion:string;

    direccion=this.base.getDireccionReportes() + 'api/ReportesVehiculos/GetReportePorCumplimiento?Ano=+'+Ano+'&Mes='+Mes;
    
    return  this.http.get<string>(direccion);
  }

  Form_Permisos(){
    
  }
  
}

 

 

