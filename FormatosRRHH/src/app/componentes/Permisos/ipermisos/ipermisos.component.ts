
import { Component, ElementRef, OnInit } from '@angular/core'; 
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { HttpClient } from '@angular/common/http';
import { SolicitudFormatosService } from 'src/app/Servicios/SolicitudFormatos/solicitud-formatos.service';




@Component({
  
  selector: 'app-ipermisos',
  templateUrl: './ipermisos.component.html',
  styleUrls: ['./ipermisos.component.css', '../../../Botones/style.css'],
  
  
})


export class IPermisosComponent implements OnInit{
  isLoading: boolean = false;
  progress: number = 0;
  formularioPermisos:FormGroup;
  isVisible:boolean = false;
  selectedColor:string='';

  

  //se define el constructor con el elementRef que nos permite poder usar funcionalidades para interactuar con html
  constructor(private elementRef: ElementRef, public formBuilder:FormBuilder, public base:ServiciosService,
     private http:HttpClient, public solicitudFormatos:SolicitudFormatosService) {
      
      
    //this.formularioPermisos = new FormGroup;
      //se recupera la informacion de el formulario
      this.formularioPermisos = this.formBuilder.group({

        f_fechaSolicitud:[this.fechaSolicitud],
        f_tipoDocumento:[],//pendiente por creacion en la tabla
        f_numDocEmpleado:[''],
        f_tipoFormato:[1],
        f_tipoVacacionesoPermisos:[''], 
        I_Remunerado:[],
        f_Remunerado:[''],
        autorizacion:[''],
        f_fechaI:[''], 
        f_horaI:[''],
        f_fechaF:[''],
        f_horaF:[''],
        f_Motivo:[''],
        f_fechaAdicion_I:[''],
        f_horaAdicion_I:[''],
        f_fechaAdicion_F:[''],
        f_horaAdicion_F:[''],
        f_tipoCertificado:[''],
        });

        //this.formularioPermisos.get('tipoDocumento').value

        
  }

  
  //FUNCIÓN PARA CARGA AUTOMATICA 
  ngOnInit(): void {
   
  }

  
  //FUNCION PARA VALIDAR SI ES REMUNERADO O NO EL PERMISO
  validar_rbt() {
    this.isVisible = true;
    console.log("Si entro a la funcion");
    let valorBtn = this.formularioPermisos.get('f_Remunerado')?.value;
    const opcionTexto_1="No autorizo que se realice ningun descuento";
    const opcionTexto_2="Autorizo que se me realice el respectivo descuento por el tiempo ausente de mis labores";
    let mostrartexto = this.elementRef.nativeElement.querySelector('#textoMostrar');

    if (valorBtn == 'remunerado') {
      this.selectedColor="green"
      this.formularioPermisos.get('I_Remunerado')?.setValue(1);
      mostrartexto = opcionTexto_1;
      this.formularioPermisos.get('autorizacion')?.setValue(opcionTexto_1);
      console.log("valorBtn "+valorBtn );
    } 
    else if (valorBtn == 'no remunerado') {
      this.selectedColor='red'
      this.formularioPermisos.get('I_Remunerado')?.setValue(0);
      console.log("remunerado 0 --> " + this.formularioPermisos.get('I_Remunerado')?.value)
      mostrartexto = opcionTexto_2;
      this.formularioPermisos.get('autorizacion')?.setValue(opcionTexto_2);
    }
    
  }

  //FUNCIÓN USADA PARA LIMPIAR LOS CAMPOS DEL FORMULARIO 
  LimpiarCampos(){
    this.formularioPermisos.get('f_fechaSolicitud')?.setValue("");
    this.formularioPermisos.get('f_tipoDocumento')?.setValue("");
    this.formularioPermisos.get('f_numDocEmpleado')?.setValue("");
    this.formularioPermisos.get('f_tipoFormato')?.setValue("");
    this.formularioPermisos.get('f_tipoVacacionesoPermisos')?.setValue("");
    this.formularioPermisos.get('I_Remunerado')?.setValue(0);
    this.formularioPermisos.get('f_Remunerado')?.setValue("");
    this.formularioPermisos.get('f_fechaI')?.setValue("");
    this.formularioPermisos.get('f_horaI')?.setValue("");
    this.formularioPermisos.get('f_fechaF')?.setValue("");
    this.formularioPermisos.get('f_horaF')?.setValue("");
    this.formularioPermisos.get('f_Motivo')?.setValue("");
    this.formularioPermisos.get('f_fechaSolicitud')?.setValue("");
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
    this.simulateLoading();
    this.solicitudReporte();
    this.LimpiarCampos();   
  }

  //FUNCIÓN PARA SOLICITAR Y MOSTRAR EL REPORTE
  solicitudReporte(){
    this.solicitudFormatos.GetForm_Permisos(this.formularioPermisos)
    .subscribe(resp => {

      window.open("","_blank")!.document.write("<html<head><title>Pdf</title><style>body{margin: 0px;}iframe{border-width: 0px;}</style></head> <body><embed width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(resp) + "#toolbar=0&navpanes=0&scrollbar=0'></embed></body></html>");
      })
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

 

 

