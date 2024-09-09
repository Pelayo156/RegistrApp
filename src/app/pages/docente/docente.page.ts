import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  public username: string = '';  // Asegúrate de que esta propiedad esté declarada

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtener el nombre de usuario de los parámetros de la consulta
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || '';  // Asignar el valor a la propiedad
    });
  }

  // Método para cerrar sesión
  logout() {
    // Aquí puedes realizar otras tareas relacionadas con el cierre de sesión, como limpiar datos de usuario
    this.router.navigate(['/login']);  // Redirige al usuario a la página de login
  }
}
