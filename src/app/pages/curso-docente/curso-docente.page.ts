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
  public qrData: string | null = null; // Datos del QR para mostrar

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Obtener parámetros del curso
    this.curso = this.route.snapshot.paramMap.get('id_curso');
    console.log(this.curso);
  }

  // Método para generar código QR para una clase
  generarQr(index: number) {
    const clase = this.clases[index];
    this.qrData = JSON.stringify({
      curso: this.curso.nombre,
      fechaInicio: clase.fechaInicio,
      horaInicio: clase.horaInicio,
      horaTermino: clase.horaTermino,
    });
  }

  toDocente() {
    this.router.navigate(['/docente']);
  }

  // Método para ir a la vista de crear clase
  toCreateClass() {
    this.router.navigate(['/create-class'])
  }
}
