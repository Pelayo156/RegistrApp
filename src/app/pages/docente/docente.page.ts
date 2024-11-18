import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  public username: string = '';
  public emailUser: string = '';
  public cursos: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private presenteprofeService: PresenteprofeService,
    private alertController: AlertController // Inyecta AlertController
  ) {}

  ngOnInit() {
    // Obtener email de usuario autenticado
    let user = localStorage.getItem("user");
    if(user) {
      console.log(JSON.parse(user));
      this.emailUser = JSON.parse(user).correo;

      // Obtener username
      this.username = JSON.parse(user).nombre;

      // Obtener cursos del usuario
      this.presenteprofeService.getCursos(this.emailUser).subscribe((response) => {
        let res: any = response;
        this.cursos = res.cursos;
        console.log(this.cursos);
      });
    }
  }

  // Método para cerrar sesión con alerta
  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Sesión no cerrada');
          },
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            localStorage.removeItem("user");
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }

  // Método para dirigirse al curso que elija el usuario
  goToCurso(curso: object) {
    this.router.navigate(['/curso-docente', curso]);
  }

  // Método para dirigirse a página de crear curso
  goToCreateCourse() {
    this.router.navigate(['/create-course']);
  }
}
