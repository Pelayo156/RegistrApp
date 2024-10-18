import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public username: string = '';
  public emailUser: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Obtener email de usuario autenticado
    let user = localStorage.getItem("user");
    if (user) {
      this.emailUser = JSON.parse(user).data.correo;

      // Obtener username
      this.username = JSON.parse(user).data.nombre
    }
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
