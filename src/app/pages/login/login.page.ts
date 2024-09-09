import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string = '';
  public password: any = '';

  // Definir usuarios válidos con su ruta de redirección
  private validUsers = [
    { username: 'alumno', password: '12345', redirect: '/home' },
    { username: 'docente', password: '12345', redirect: '/docente' }
  ];

  constructor(private router: Router) {}

  login() {
    
    const user = this.validUsers.find(user => user.username === this.username && user.password === this.password);

    if (user) {
      
      this.router.navigate([user.redirect], { queryParams: { username: this.username } });
    } else {
     
      alert('Error: las credenciales no están en la base de datos.');
    }
  }

  ngOnInit() {}
}
