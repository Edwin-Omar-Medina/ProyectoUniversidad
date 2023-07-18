
import { Component, ElementRef, OnInit } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  
  selector: 'app-ipermisos',
  templateUrl: './ipermisos.component.html',
  styleUrls: ['./ipermisos.component.css'],

})


export class IPermisosComponent implements OnInit{
  
  formularioPermisos:FormGroup;

   
 

  //se define el constructor con el elementRef que nos permite poder usar funcionalidades para interactuar con html
  constructor(private elementRef: ElementRef, public formulario:FormBuilder) {
        
      //se recupera la informacion de el formulario
      this.formularioPermisos = this.formulario.group({
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

    
}

 

 

