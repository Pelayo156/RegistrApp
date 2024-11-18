import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-curso-docente',
  templateUrl: './curso-docente.page.html',
  styleUrls: ['./curso-docente.page.scss'],
})
export class CursoDocentePage implements OnInit {
  public curso: any = {};
  public clases: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Obtener parámetros del curso
    this.route.queryParams.subscribe((params) => {
      this.curso = JSON.parse(params['curso'] || '{}');
      this.cargarClases();
    });
  }

  // Método para cargar las clases asociadas al curso
  cargarClases() {
    const clasesGuardadas = JSON.parse(localStorage.getItem('clasesPorCurso') || '{}');
    this.clases = clasesGuardadas[this.curso.nombre] || [];
  }

  // Método para eliminar una clase
  async eliminarClase(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta clase?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.clases.splice(index, 1); // Eliminar clase del arreglo local
            this.guardarClases(); // Guardar cambios en localStorage
          },
        },
      ],
    });
    await alert.present();
  }

  // Método para suspender una clase
  async suspenderClase(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar suspensión',
      message: '¿Estás seguro de que deseas suspender esta clase?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Suspender',
          handler: () => {
            this.clases[index].suspendida = true; // Marcar clase como suspendida
            this.guardarClases(); // Guardar cambios en localStorage
          },
        },
      ],
    });
    await alert.present();
  }

  // Método para guardar las clases actualizadas en localStorage
  guardarClases() {
    const clasesGuardadas = JSON.parse(localStorage.getItem('clasesPorCurso') || '{}');
    clasesGuardadas[this.curso.nombre] = this.clases;
    localStorage.setItem('clasesPorCurso', JSON.stringify(clasesGuardadas));
    this.cargarClases();
  }

  // Método para regresar a la vista principal
  toDocente() {
    this.router.navigate(['/docente']);
  }
}
