import { Component, ElementRef, OnInit } from '@angular/core'; 
import {  FormGroup,FormBuilder} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { HttpClient } from '@angular/common/http';
import { SolicitudFormatosService } from 'src/app/Servicios/SolicitudFormatos/solicitud-formatos.service';


@Component({
  selector: 'app-icertificados',
  templateUrl: './icertificados.component.html',
  styleUrls: ['./icertificados.component.css', '../../../Botones/style.css'],
})
export class ICertificadosComponent {
  isLoading: boolean = false;
  progress: number = 0;
  formularioCertificado:FormGroup;
  isVisible:boolean = false;
  selectedColor:string='';
  textoMostrarSeleccion:string='';


  //se define el constructor con el elementRef que nos permite poder usar funcionalidades para interactuar con html
  constructor(private elementRef: ElementRef, public formBuilder:FormBuilder, public base:ServiciosService,
    private http:HttpClient, public solicitudFormatos:SolicitudFormatosService) {
     
     
   //this.formularioPermisos = new FormGroup;
     //se recupera la informacion de el formulario
     this.formularioCertificado = this.formBuilder.group({

       f_fechaSolicitud:[this.fechaSolicitud],
       f_tipoDocumento:[],//pendiente por creacion en la tabla
       f_numDocEmpleado:[''],
       f_tipoFormato:[4],
       f_tipoVacacionesoPermisos:[''], 
       I_Remunerado:[0],
       f_Remunerado:['na'],
       autorizacion:['na'],
       f_fechaI:['na'], 
       f_horaI:['an'],
       f_fechaF:['na'],
       f_horaF:['na'],
       f_Motivo:[''],
       f_fechaAdicion_I:['na'],
       f_horaAdicion_I:['na'],
       f_fechaAdicion_F:['na'],
       f_horaAdicion_F:['na'],
       f_tipoCertificado:[''],
       });

       //this.formularioPermisos.get('tipoDocumento').value

       
 }

 
 //FUNCIÓN PARA CARGA AUTOMATICA 
 ngOnInit(): void {
  
 }

 
 
 //FUNCIÓN USADA PARA LIMPIAR LOS CAMPOS DEL FORMULARIO 
 LimpiarCampos(){
   this.formularioCertificado.get('f_fechaSolicitud')?.setValue("");
   this.formularioCertificado.get('f_tipoDocumento')?.setValue("");
   this.formularioCertificado.get('f_numDocEmpleado')?.setValue("");
   this.formularioCertificado.get('f_tipoFormato')?.setValue("");
   this.formularioCertificado.get('f_tipoVacacionesoPermisos')?.setValue("");
   this.formularioCertificado.get('I_Remunerado')?.setValue(0);
   this.formularioCertificado.get('f_Remunerado')?.setValue("");
   this.formularioCertificado.get('f_fechaI')?.setValue("");
   this.formularioCertificado.get('f_horaI')?.setValue("");
   this.formularioCertificado.get('f_fechaF')?.setValue("");
   this.formularioCertificado.get('f_horaF')?.setValue("");
   this.formularioCertificado.get('f_Motivo')?.setValue("");
   this.formularioCertificado.get('f_fechaSolicitud')?.setValue("");
   this.isVisible = false;
 }


 //SE TOMA LA FECHA ACTUAL Y SE COLOCA EN FORMATO INDICADO PARA ALMACENAR Y ENVIAR
 today: number = Date.now();
 pipe = new DatePipe('en-US');
 transformDate(date: any) {
   
   return this.pipe.transform(date, 'yyyy/MM/dd');
 }

 fechaSolicitud = this.transformDate(Date.now());

 

 //eSTA FUNCION ES DE EL FORMULRIO PERO NO FUNCIONO BIEN ASI QUE SE AÑADE LA SIGUIENTE
 SolicitarRPT_Permiso(){

 }

 //FUNCIÓN PRINCIPAL QUE SE LLAMA DESDE EL BOTON DE SOLICITUD
 BuscarReporte(){
   //con esto validamos si los campos de el formGroup estan llenos
   if(this.formularioCertificado.valid){
     console.log("estan llenos los campos")
     this.simulateLoading(); //llama a la funcion que muestra la barra de carga
      
     this.validarDOC(); //llama a la funcion que valida el documento 

     
   }else{
     this.mostrarAlerta(3);
   }

 }

 //FUNCIÓN PARA VALIDAR SI EL NÚMERO DE DOCUMENTO EXISTE EN LA BASE DE DATOS
 validarDOC(){

     this.solicitudFormatos.ValidarDoc(this.formularioCertificado.get('f_numDocEmpleado')?.value).then((data) => {
       // Utiliza los datos obtenidos de la API aquí
       if (typeof data === 'number') {
         if(data > 0 ){
           this.solicitudReporte();//se llama la funcion que mostrara el reporte
         }else{
           this.mostrarAlerta(data);
         }
       }
     })
     .catch((error) => {
       // Manejo de errores
       console.error('Error al obtener datos de la API 22:', error);
     });
 }
  

 //MOSTRAR ALERTA EN PANTALLA
 mostrarAlerta(numero:number) {
   if (numero == 0 ){
     window.alert('El número de documento ingresado es incorrecto intentelo nuevamente');
   }else if(numero == 3){
     window.alert('Faltan campos por llenar');
   }
   else{
     window.alert('La información suministrada es incorrecta');
   }
 }

 //FUNCIÓN PARA SOLICITAR Y MOSTRAR EL REPORTE
 solicitudReporte(){
   this.solicitudFormatos.GetForm_Permisos(this.formularioCertificado)
   .subscribe(resp => {

     window.open("","_blank")!.document.write("<html<head><title>Pdf</title><style>body{margin: 0px;}iframe{border-width: 0px;}</style></head> <body><embed width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(resp) + "#toolbar=0&navpanes=0&scrollbar=0'></embed></body></html>");
     });
    
    this.LimpiarCampos(); //llama a la funcion que limpiara los campos del formulario  
 }


 // FUNCIÓN PARA MOSTRAR LA ANIMACIÓN DE CARGA DEL BOTON
 simulateLoading() {
   this.isLoading = true;
   const interval = setInterval(() => {
     this.progress += 11;
     if (this.progress >= 100) {
       clearInterval(interval);
       this.isLoading = false;
       this.progress = 0;
     }
   }, 200);
 }

 
}





