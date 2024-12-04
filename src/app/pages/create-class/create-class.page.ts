import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
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
  id_curso: any;

  // Datos para crear la clase
  fecha: string = '';
  hora_inicio: string = '';
  hora_termino: string = '';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private route: ActivatedRoute,
    private presenteProfeService: PresenteprofeService
  ) {}

  ngOnInit() {
    // Obtener parámetros del curso
    this.id_curso = this.route.snapshot.paramMap.get('id_curso');
    
    // Obtener token del usuario
    let current_user = localStorage.getItem('user') || 'no existe token';
    this.token = JSON.parse(current_user).token;

    console.log(this.id_curso);
    console.log(this.token);
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
    const fechaInicioDate = new Date(this.fecha);

    fechaHoy.setHours(0, 0, 0, 0);
    fechaInicioDate.setHours(0, 0, 0, 0);

    if (this.fecha && this.hora_inicio && this.hora_termino) {
      if (fechaInicioDate < fechaHoy) {
        this.mostrarAlerta('La fecha ingresada no es valida.');
      } else {
        const nuevaClase: Clase = {
          fecha: this.convertirFecha(this.fecha),
          hora_inicio: this.hora_inicio,
          hora_termino: this.hora_termino,
        };
        console.log(nuevaClase);

        // Lógica de registro de clase
        this.presenteProfeService.createClass(nuevaClase, this.token, this.id_curso).subscribe(response => {
          console.log(response);
          this.mostrarToast('Se ha registrado su clase correctamente');
          this.router.navigate(['/curso-docente', this.id_curso]).then(() => {
            // Refresco pantalla para que se muestren los nuevos datos al usuario
            window.location.reload();
          });
        });
      }
    } else {
      let mensaje = 'Por favor, completa los siguientes campos:';
      if (!this.fecha) mensaje += ' Fecha de Inicio.';
      if (!this.hora_inicio) mensaje += ' Hora de Inicio.';
      if (!this.hora_termino) mensaje += ' Hora de Término.';
      this.mostrarAlerta(mensaje);
    }
  }

  toCursoDocente(id: string) {
    this.router.navigate(['/curso-docente', id]);
  }

  // Función para transformar formato de fecha
  convertirFecha(fecha: string): string {
    const fechaObj = new Date(fecha);
    const year = fechaObj.getFullYear();
    const month = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
    const day = fechaObj.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
}
