import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';

@Component({
  selector: 'app-curso-docente',
  templateUrl: './curso-docente.page.html',
  styleUrls: ['./curso-docente.page.scss'],
})
export class CursoDocentePage implements OnInit {
  public token: string = '';
  public id_curso: any;

  public curso: any = {};
  public clases: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private presenteProfeService: PresenteprofeService
  ) {}

  ngOnInit() {
    // Obtener parámetros del curso
    this.id_curso = this.route.snapshot.paramMap.get('id_curso');
    
    // Obtener token del usuario
    let current_user = localStorage.getItem('user') || 'no existe token';
    this.token = JSON.parse(current_user).token;

    // Obtener información del curso seleccionado
    this.presenteProfeService.getCourse(this.id_curso, this.token).subscribe((response: any) => {
      this.curso = response.curso;
    });

    // Obtener clases del curso seleccionado
    this.presenteProfeService.getClasses(this.id_curso, this.token).subscribe((response: any) => {
      this.clases = response.clases;
      this.clases.forEach(clase => {
        clase.showQRCode = false;
      });
      console.log(this.clases);
    });
  }

  toDocente() {
    this.router.navigate(['/docente']);
  }

  // Método para ir a la vista de crear clase
  toCreateClass(id_curso: string) {
    this.router.navigate(['/create-class', id_curso]);
  }

  generateQRCode(codigo_web: string) {
    const clase = this.clases.find(c => c.codigo_web === codigo_web);
    if (clase) {
      clase.showQRCode = !clase.showQRCode;
    }
  }
}
