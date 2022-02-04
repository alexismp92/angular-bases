import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{


   nuevo : Personaje = {
     nombre: '',
     poder: 0
   };

   constructor(){};

  /* ANTES EN JS

    agregar(event: any){
      event.preventDefault();
      console.log("Hey");
  }

    cambiarNombre(event: any){
      console.log(event.target.value);
  */

}
