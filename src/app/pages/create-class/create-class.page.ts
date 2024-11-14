import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage {


  fechaInicio: string = '';
  horaInicio: string = '';
  horaTermino: string = '';

  constructor(private alertController: AlertController) { }


  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


  async guardarClase() {
    if (this.fechaInicio && this.horaInicio && this.horaTermino) {
      
      const fechaHoraInicio = `${this.fechaInicio} ${this.horaInicio}`;
      const fechaHoraTermino = `${this.fechaInicio} ${this.horaTermino}`;

      console.log('Clase guardada:');
      console.log('Fecha y Hora de Inicio:', fechaHoraInicio);
      console.log('Fecha y Hora de Término:', fechaHoraTermino);

      
    } else {
      
      let mensaje = 'Por favor, ingresa los siguientes campos:';
      if (!this.fechaInicio) mensaje += ' Fecha de Inicio';
      if (!this.horaInicio) mensaje += ' Hora de Inicio';
      if (!this.horaTermino) mensaje += ' Hora de Término';

    
      this.mostrarAlerta(mensaje);
    }
  }
}
