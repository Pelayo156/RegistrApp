import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-docente',
  templateUrl: './curso-docente.page.html',
  styleUrls: ['./curso-docente.page.scss'],
})
export class CursoDocentePage implements OnInit {
  public curso: any = {}; 
  public texto: string = '';
  public mostrarQr: boolean = false;

  // Información del profesor
  public profesor = {
    nombre: 'Benjamin Elias Mora Torres',
    correo: 'bej.mora@profesor.duoc.cl',
    seccion: 'Sección 010D',
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

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

  toDocente() {
    this.mostrarQr = false;
    this.router.navigate(['/docente']);
  }
}
