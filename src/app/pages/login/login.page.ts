import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    
    const user = this.validUsers.find(user => user.username === this.username && user.password === this.password);

    if (user) {
      
      this.router.navigate([user.redirect], { queryParams: { username: this.username, user: JSON.stringify(user)} });
    } else {
     
      alert('Usuario y/o contraseña incorrectos, intente nuevamente.');
    }
  }

  // Nueva forma (aun no implementada)
  newLogin(username: string, password: string) {
    let tokenUser: any = {};

    // Guardar token dentro de una variable
    this.loginService.validLogin(username, password).subscribe((res) => {
      tokenUser = res;
    })

    // Validar que haya llegado un token válido
    if(tokenUser.token) {
      localStorage.setItem('tokenUser', JSON.stringify(tokenUser));
      if(tokenUser.type == 'alumno') {
        this.router.navigate(['/home']);
      } else if(tokenUser.type == 'docente') {
        this.router.navigate(['/docente'])
      }
    }
    alert('Usuario y/o contraseña incorrectos, intente nuevamente.');
  }

  ngOnInit() {}
}
