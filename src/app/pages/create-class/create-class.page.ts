import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Clase } from 'src/app/models/clase';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage implements OnInit {
  // Datos para registrar curso
  token: string = '';
  id_curso: string = '';

  // Datos para crear la clase
  fecha_inicio: string = '';
  hora_inicio: string = '';
  hora_termino: string = '';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private presenteProfeService: PresenteprofeService
  ) {}

  ngOnInit() {
    
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }

  async guardarClase() {
 
    const fechaHoy = new Date();
    const fechaInicioDate = new Date(this.fecha_inicio);

    fechaHoy.setHours(0, 0, 0, 0);
    fechaInicioDate.setHours(0, 0, 0, 0);

    if (this.fecha_inicio && this.hora_inicio && this.hora_termino) {
      if (fechaInicioDate < fechaHoy) {
        this.mostrarAlerta('La fecha ingresada no es valida.');
      } else {
        const nuevaClase: Clase = {
          fecha_inicio: this.fecha_inicio,
          hora_inicio: this.hora_inicio,
          hora_termino: this.hora_termino,
        };

        // Lógica de registro de clase

        this.mostrarToast('Se ha registrado su clase correctamente');

        this.router.navigate(['/curso-docente']);
      }
    } else {
      let mensaje = 'Por favor, completa los siguientes campos:';
      if (!this.fecha_inicio) mensaje += ' Fecha de Inicio.';
      if (!this.hora_inicio) mensaje += ' Hora de Inicio.';
      if (!this.hora_termino) mensaje += ' Hora de Término.';
      this.mostrarAlerta(mensaje);
    }
  }
}
