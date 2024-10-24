import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Router, ActivatedRoute } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
>>>>>>> Stashed changes

@Component({
  selector: 'app-curso-docente',
  templateUrl: './curso-docente.page.html',
  styleUrls: ['./curso-docente.page.scss'],
})
export class CursoDocentePage implements OnInit {
  public curso: any = {}; 
  public texto: string = '';
  public mostrarQr: boolean = false;
  
<<<<<<< Updated upstream
  constructor(private route: ActivatedRoute, private router: Router) { }
=======
  constructor(private route: ActivatedRoute, private navCtrl: NavController) { } // Agrega navCtrl aquí
>>>>>>> Stashed changes

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.curso = params;
      console.log(this.curso);
      this.texto = this.curso.id;
    });
  }

    // Método para cerrar sesión
    logout() {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    }

  generarQr() {
    this.mostrarQr = true;
  }
  
  volver() {
    this.navCtrl.back(); 
  }

  toDocente() {
    this.mostrarQr = false;
    this.router.navigate(['/docente']);
  }
}
