import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage implements OnInit {
  fechaInicio: string = '';
  horaInicio: string = '';
  horaTermino: string = '';
  curso: any = {}; 

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
  
    const cursoGuardado = localStorage.getItem('cursoSeleccionado');
    if (cursoGuardado) {
      this.curso = JSON.parse(cursoGuardado);
    }
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
    const fechaInicioDate = new Date(this.fechaInicio);

    fechaHoy.setHours(0, 0, 0, 0);
    fechaInicioDate.setHours(0, 0, 0, 0);

    if (this.fechaInicio && this.horaInicio && this.horaTermino) {
      if (fechaInicioDate < fechaHoy) {
        this.mostrarAlerta('La fecha ingresada no es valida.');
      } else {
        const nuevaClase = {
          fechaInicio: this.fechaInicio,
          horaInicio: this.horaInicio,
          horaTermino: this.horaTermino,
        };

        let clasesGuardadas = JSON.parse(localStorage.getItem('clasesPorCurso') || '{}');

        if (!clasesGuardadas[this.curso.nombre]) {
          clasesGuardadas[this.curso.nombre] = [];
        }

        clasesGuardadas[this.curso.nombre].push(nuevaClase);

        localStorage.setItem('clasesPorCurso', JSON.stringify(clasesGuardadas));

        this.mostrarToast('Se ha registrado su clase correctamente');

        this.router.navigate(['/curso-docente'], {
          queryParams: { curso: JSON.stringify(this.curso) }
        });
      }
    } else {
      let mensaje = 'Por favor, completa los siguientes campos:';
      if (!this.fechaInicio) mensaje += ' Fecha de Inicio.';
      if (!this.horaInicio) mensaje += ' Hora de Inicio.';
      if (!this.horaTermino) mensaje += ' Hora de Término.';
      this.mostrarAlerta(mensaje);
    }
  }
}
