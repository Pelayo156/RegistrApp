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
    // Inicializar el curso (puedes cargarlo de parámetros o localStorage si aplica)
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
    if (this.fechaInicio && this.horaInicio && this.horaTermino) {
      const nuevaClase = {
        fechaInicio: this.fechaInicio,
        horaInicio: this.horaInicio,
        horaTermino: this.horaTermino,
      };

      // Obtener clases guardadas por curso
      let clasesGuardadas = JSON.parse(localStorage.getItem('clasesPorCurso') || '{}');

      // Verificar si ya existe un arreglo para este curso
      if (!clasesGuardadas[this.curso.nombre]) {
        clasesGuardadas[this.curso.nombre] = [];
      }

      // Añadir la nueva clase
      clasesGuardadas[this.curso.nombre].push(nuevaClase);

      // Guardar en localStorage
      localStorage.setItem('clasesPorCurso', JSON.stringify(clasesGuardadas));

      this.mostrarToast('Se ha registrado su clase correctamente');

      // Navegar a la página del curso docente
      this.router.navigate(['/curso-docente'], {
        queryParams: { curso: JSON.stringify(this.curso) }
      });
    } else {
      let mensaje = 'Por favor, completa los siguientes campos:';
      if (!this.fechaInicio) mensaje += ' Fecha de Inicio.';
      if (!this.horaInicio) mensaje += ' Hora de Inicio.';
      if (!this.horaTermino) mensaje += ' Hora de Término.';
      this.mostrarAlerta(mensaje);
    }
  }
}
