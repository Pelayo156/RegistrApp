import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PresenteprofeService } from 'src/app/services/presenteprofe.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  public username: string = '';
  public emailUser: string = '';
  public cursos: any;

  constructor(private route: ActivatedRoute, private router: Router, private presenteprofeService: PresenteprofeService) {}

  ngOnInit() {
    // Obtener email de usuario autenticado
    let user = localStorage.getItem("user");
    if(user) {
      this.emailUser = JSON.parse(user).data.correo;

      // Obtener username
      this.username = JSON.parse(user).data.nombre

      // Obtener cursos del usuario
      this.presenteprofeService.getCursos(this.emailUser).subscribe((response) => {
        let res: any = response;
        this.cursos = res.cursos;
        console.log(this.cursos);
      });
    }
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

  // Método para dirigirse al curso que elija el usuario
  goToCurso(curso: object) {
    this.router.navigate(['/curso-docente', curso]);
  }
}
