
import { Component, ElementRef, OnInit } from '@angular/core'; 
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { HttpClient } from '@angular/common/http';
import { SolicitudFormatosService } from 'src/app/Servicios/SolicitudFormatos/solicitud-formatos.service';







@Component({
  
  selector: 'app-ipermisos',
  templateUrl: './ipermisos.component.html',
  styleUrls: ['./ipermisos.component.css'],

})


export class IPermisosComponent implements OnInit{
  
  formularioPermisos:FormGroup;

  //se define el constructor con el elementRef que nos permite poder usar funcionalidades para interactuar con html
  constructor(private elementRef: ElementRef, public formBuilder:FormBuilder, public base:ServiciosService,
     private http:HttpClient, public solicitudFormatos:SolicitudFormatosService) {
        
    //this.formularioPermisos = new FormGroup;
      //se recupera la informacion de el formulario
      this.formularioPermisos = this.formBuilder.group({

        f_fechaSolicitud:[this.fechaSolicitud],
        f_tipoDocumento:[''],//pendiente por creacion en la tabla
        f_numDocEmpleado:[''],
        f_tipoFormato:['1'],
        f_tipoVacacionesoPermisos:[''], 
        f_Remunerado:[''],
        f_fechaI:[''], 
        f_horaI:[''],
        f_fechaF:[''],
        f_horaF:[''],
        f_Motivo:[''],
        horaLlegada:[''],
        f_fechaAdicion_I:[''],
        f_horaAdicion_I:[''],
        f_fechaAdicion_F:[''],
        f_horaAdicion_F:[''],
        f_tipoCertificado:[''],
        });

        //this.formularioPermisos.get('tipoDocumento').value

        
  }

  

  ngOnInit(): void { }


  //Funcion para validar el radiobtn que se esta seleccionando
  validar_rbt(): void {
    let valorBtn = this.formularioPermisos.get('f_Remunerado')?.value;
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

 

  

  //creacion de la funcion que llama a el inform
  today: number = Date.now();
  pipe = new DatePipe('en-US');
  transformDate(date: any) {
    
    return this.pipe.transform(date, 'dd/MM/YYYY');
  }

  fechaSolicitud = this.transformDate(Date.now());

  

  //codigo de boton que llama al servicio
  SolicitarRPT_Permiso():any{
    //console.log("Enviado xd");
   // console.log(this.formularioPermisos.value);

    this.solicitudFormatos.GetForm_Permisos(this.formularioPermisos)
         .subscribe(resp => {

          window.open("","_blank")!.document.write("<html<head><title>Pdf</title><style>body{margin: 0px;}iframe{border-width: 0px;}</style></head> <body><embed width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(resp)+"#toolbar=0&navpanes=0&scrollbar=0'></embed></body></html>");
    })
  }


  //caracteres maximos en el documento de identidad
   limitarLongitud() {
    let caracteres = this.formularioPermisos.get('f_numDocEmpleado')?.value;
    let max = 5
  
    if (caracteres?.value.length > max) {
      caracteres.value = caracteres.value.substring(0, max); // Recorta el valor a la longitud máxima
    }
  }
  
}

 

 

