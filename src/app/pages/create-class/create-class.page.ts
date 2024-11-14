import { Component } from '@angular/core';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage {


  fechaInicio: string = '';
  horaInicio: string = '';
  horaTermino: string = '';

  constructor() { }


  guardarClase() {
    if (this.fechaInicio && this.horaInicio && this.horaTermino) {
 
      const fechaHoraInicio = `${this.fechaInicio} ${this.horaInicio}`;
      const fechaHoraTermino = `${this.fechaInicio} ${this.horaTermino}`;

      console.log('Clase guardada:');
      console.log('Fecha y Hora de Inicio:', fechaHoraInicio);
      console.log('Fecha y Hora de Término:', fechaHoraTermino);

      
    } else {
      console.error('Por favor, ingresa todas las fechas y horas.');
    }
  }
}
