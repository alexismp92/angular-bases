import { Component, Input} from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(private dbzService: DbzService){
    
  }
  //Si se desea asociar un nombre nuevo al objeto que estamos agregando se puede usar @Input('nuevoNombre')
  //@Input() personajes: Personaje[]=[];

  ngOnInit(): void {
  }

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

}
